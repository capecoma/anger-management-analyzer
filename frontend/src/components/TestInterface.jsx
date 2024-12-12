import React, { useState } from 'react';
import { PlayCircle, StopCircle, RotateCcw, Save } from 'lucide-react';

const TestInterface = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [testResults, setTestResults] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const mockAnalysis = {
    tension_level: 0.65,
    response_patterns: ['defensive', 'escalating'],
    recommendations: ['Take a pause', 'Use I statements']
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleRecordToggle = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Start recording logic
    } else {
      // Stop recording and analyze
      setTestResults(mockAnalysis);
    }
  };

  const handleReset = () => {
    setTestResults(null);
    setSelectedFile(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-800">Analysis Test Interface</h1>
          <p className="text-gray-600">Test voice pattern analysis and recommendations</p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h2 className="text-lg font-medium text-gray-800">Test Controls</h2>
              <p className="text-sm text-gray-600">Record or upload audio for analysis</p>
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={handleRecordToggle}
                className={`p-3 rounded-lg flex items-center space-x-2 ${isRecording ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}
              >
                {isRecording ? 
                  <><StopCircle className="w-5 h-5" /> <span>Stop</span></> :
                  <><PlayCircle className="w-5 h-5" /> <span>Record</span></>
                }
              </button>
              <button 
                onClick={handleReset}
                className="p-3 bg-gray-50 text-gray-600 rounded-lg flex items-center space-x-2"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          <div className="border-t pt-4">
            <input
              type="file"
              accept="audio/*"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-600
                hover:file:bg-blue-100"
            />
          </div>
        </div>

        {/* Results */}
        {testResults && (
          <div className="bg-white rounded-2xl p-6 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-800">Analysis Results</h2>
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg flex items-center space-x-2">
                <Save className="w-5 h-5" />
                <span>Save Results</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Tension Level */}
              <div className="p-4 bg-amber-50 rounded-lg">
                <h3 className="font-medium text-amber-800 mb-2">Tension Level</h3>
                <div className="text-2xl font-bold text-amber-900">
                  {(testResults.tension_level * 100).toFixed(0)}%
                </div>
              </div>

              {/* Response Patterns */}
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-medium text-purple-800 mb-2">Patterns Detected</h3>
                <ul className="space-y-1">
                  {testResults.response_patterns.map((pattern, index) => (
                    <li key={index} className="text-purple-900">
                      {pattern}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommendations */}
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-medium text-green-800 mb-2">Recommendations</h3>
                <ul className="space-y-1">
                  {testResults.recommendations.map((rec, index) => (
                    <li key={index} className="text-green-900">
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestInterface;