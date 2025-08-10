import React, { useState } from 'react';
import { Rss, Download, Copy, CheckCircle, AlertCircle } from 'lucide-react';
import { generateRSSFeed, downloadRSSFeed, copyRSSToClipboard } from '../utils/rssUtils';

const RSSFeedGenerator: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleDownload = () => {
    downloadRSSFeed();
  };

  const handleCopy = async () => {
    const success = await copyRSSToClipboard();
    setCopyStatus(success ? 'success' : 'error');
    
    // Reset status after 3 seconds
    setTimeout(() => setCopyStatus('idle'), 3000);
  };

  const handleViewFeed = () => {
    const rssContent = generateRSSFeed();
    const blob = new Blob([rssContent], { type: 'application/rss+xml' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    
    // Clean up the URL after a short delay
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <div className="bg-gradient-to-br from-pacific/5 to-pacific-dark/5 rounded-2xl p-6 border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-pacific to-pacific-dark rounded-lg flex items-center justify-center mr-3">
          <Rss className="text-white" size={20} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-charcoal">RSS Feed</h3>
          <p className="text-sm text-gray-600">Subscribe to our latest blog posts</p>
        </div>
      </div>
      
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        Stay updated with our latest insights on digital transformation, automation, and business growth. 
        Subscribe to our RSS feed to get new posts delivered directly to your feed reader.
      </p>
      
      <div className="flex flex-wrap gap-2">
        <button
          onClick={handleViewFeed}
          className="inline-flex items-center px-3 py-2 bg-pacific text-white text-sm font-medium rounded-lg hover:bg-pacific-dark transition-colors"
        >
          <Rss size={14} className="mr-1" />
          View Feed
        </button>
        
        <button
          onClick={handleDownload}
          className="inline-flex items-center px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
        >
          <Download size={14} className="mr-1" />
          Download
        </button>
        
        <button
          onClick={handleCopy}
          className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
            copyStatus === 'success'
              ? 'bg-green-100 text-green-700'
              : copyStatus === 'error'
              ? 'bg-red-100 text-red-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {copyStatus === 'success' ? (
            <>
              <CheckCircle size={14} className="mr-1" />
              Copied!
            </>
          ) : copyStatus === 'error' ? (
            <>
              <AlertCircle size={14} className="mr-1" />
              Error
            </>
          ) : (
            <>
              <Copy size={14} className="mr-1" />
              Copy XML
            </>
          )}
        </button>
      </div>
      
      <div className="mt-4 p-3 bg-white rounded-lg border border-gray-200">
        <p className="text-xs text-gray-500 mb-1">RSS Feed URL:</p>
        <code className="text-xs text-pacific break-all">
          https://seattledigitalstudio.com/rss.xml
        </code>
      </div>
    </div>
  );
};

export default RSSFeedGenerator;