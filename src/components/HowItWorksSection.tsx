import React from 'react';

export const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gray-900/30" id="how-it-works">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            No DevOps knowledge required. Deploy AI models in minutes, not weeks.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-xl">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <span className="text-xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Connect your model</h3>
            <p className="text-gray-400 mb-4">
              Upload your model or connect from your Git repository with pre-configured environments
            </p>
            <div className="bg-gray-900 rounded-md p-3 font-mono text-sm">
              <pre className="text-gray-300">
{`from aethermind import AetherMind

# Initialize client
client = AetherMind(api_key="YOUR_API_KEY")

# Upload model with pre-configured env
client.upload("./my_awesome_model", 
  framework="pytorch")`}
              </pre>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-xl">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <span className="text-xl font-bold text-primary">2</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Configure & Deploy</h3>
            <p className="text-gray-400 mb-4">
              Set compute resources or let us auto-optimize with automated scaling for your workload
            </p>
            <div className="bg-gray-900 rounded-md p-4">
              <div className="mb-4">
                <label className="block text-gray-400 text-sm mb-2">Environment</label>
                <div className="relative">
                  <select className="bg-gray-800 border border-gray-700 rounded-md py-2 px-3 w-full appearance-none text-white focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>PyTorch 2.1</option>
                    <option>TensorFlow 2.14</option>
                    <option>Hugging Face Transformers</option>
                    <option>Custom Environment</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Scaling</label>
                <div className="flex items-center">
                  <label className="inline-flex items-center mr-4">
                    <input type="radio" className="form-radio text-primary" name="scaling" value="auto" checked />
                    <span className="ml-2 text-gray-300">Auto-scaling</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" className="form-radio text-primary" name="scaling" value="fixed" />
                    <span className="ml-2 text-gray-300">Fixed replicas</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-xl">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <span className="text-xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Monitor & Manage</h3>
            <p className="text-gray-400 mb-4">
              Simple dashboard monitoring with version management and API key controls
            </p>
            <div className="bg-gray-900 rounded-md p-3">
              <div className="flex justify-between mb-3">
                <span className="text-sm text-gray-400">Version</span>
                <div className="flex items-center">
                  <span className="text-sm text-green-400 mr-2">v1.2.3</span>
                  <div className="relative">
                    <select className="bg-gray-800 border border-gray-700 rounded-md py-1 px-2 text-xs appearance-none text-white focus:outline-none focus:ring-1 focus:ring-primary">
                      <option>v1.2.3 (current)</option>
                      <option>v1.2.2</option>
                      <option>v1.1.0</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="h-10 bg-gray-800 rounded-md overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-primary to-secondary opacity-50 relative">
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className="w-full h-4">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div 
                          key={i} 
                          className="inline-block w-1 h-4 bg-white opacity-75"
                          style={{ 
                            margin: '0 3px', 
                            height: `${Math.max(4, Math.random() * 16)}px`,
                            opacity: 0.5 + Math.random() * 0.5
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex mt-3 justify-between items-center">
                <span className="text-xs text-gray-500">Performance Optimized</span>
                <span className="text-xs text-primary underline cursor-pointer">View dashboard</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="text-primary hover:text-primary/80 font-medium flex items-center justify-center">
            <span>View Documentation</span>
            <svg className="h-5 w-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
