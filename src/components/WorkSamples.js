import React from 'react';
import bibleChecklist from "../assets/bibleChecklist.png"

const WorkSample = () => (
  <>  
    <h1 class="py-2 mt-2 font-sans">Work Samples</h1>
 
    <div class=" py-6 grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-h-[33rem] overflow-hidden">
      <ul class="space-y-8">
        <li class="text-sm leading-6" >
          <figure class="h-72 relative flex flex-col-reverse bg-gray-500 rounded-xl p-6 dark:bg-slate-800 dark:highlight-white/5" >
            <img src={bibleChecklist} alt="Bible Checklist App" />
          </figure>
          <div class="flex-auto">
            <div class="py-2 text-base dark:text-slate-300" >
              <a class="text-base text-xs" href="" tabIndex="0">Bible Checklist</a>
              <div>
                <ul>
                  <li class="text-base text-xs text-gray-500">React Native</li>
                  <li class="text-base text-xs text-gray-500"> Expo</li>
                  <li class="text-base text-xs text-gray-500">Google Console</li>
                </ul>
              
              </div>
              
            </div>
          </div>
        </li>
      </ul>
      <ul class="space-y-8">
        <li class="text-sm leading-6" >
          <figure class="h-72 relative flex flex-col-reverse bg-green-100 rounded-xl p-6 dark:bg-slate-800 dark:highlight-white/5" >
            <img src={bibleChecklist} alt="Bible Checklist App" />
          </figure>
          <div class="flex-auto">
            <div class="py-2 text-base dark:text-slate-300" >
              <a class="text-base text-xs" href="" tabIndex="0">Nepali Fluency E-Book</a>
              <div>
                <ul>
                  <li class="text-base text-xs text-gray-500">JS Custom Module</li>
                  <li class="text-base text-xs text-gray-500">Node</li>
                  <li class="text-base text-xs text-gray-500">Less</li>
                </ul>
              
              </div>
              
            </div>
          </div>
        </li>
      </ul>
      <ul class="space-y-8">
        <li class="text-sm leading-6" >
          <figure class="h-72 relative flex flex-col-reverse bg-green-500 rounded-xl p-6 dark:bg-slate-800 dark:highlight-white/5" >
            <img src={bibleChecklist} alt="Bible Checklist App" />
          </figure>
          <div class="flex-auto">
            <div class="py-2 dark:text-slate-300" >
              <a class="text-base text-xs" href="" tabIndex="0">HTML Report</a>
              <div>
                <ul>
                  <li class="text-base text-xs text-gray-500">HTML + CSS</li>
                  <li class="text-base text-xs text-gray-500">Base64 image</li>
                </ul>
              
              </div>
              
            </div>
          </div>
        </li>
      </ul>
      
    </div>
  </>

)

export default WorkSample;