/***************************************************************
 * Copyright notice
 * 
 * (c) 2004 Jean-David Gadina (info@macmade.net)
 * All rights reserved
 * 
 * This script is part of the TYPO3 project. The TYPO3 project is 
 * free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 * 
 * The GNU General Public License can be found at
 * http://www.gnu.org/copyleft/gpl.html.
 * 
 * This script is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

/** 
 * TS Setup - Level 2 configuration
 *
 * @author      Jean-David Gadina (info@macmade.net)
 * @version     1.0
 */
lib.menus.level2 = COA
lib.menus.level2 {
    
    10            = TEXT
    10.insertData = 1
    10.value      = {leveltitle:1}
    10.wrap       = <h1>|</h1>
    20            = HMENU
    20.entryLevel = 1
    20 {
        
        // Base settings
        1 = TMENU
        1 {
            
            // Accessibility settings
            IProcFunc               = user_cronaccessiblemenus->makeAccessible
            IProcFunc.accessKeys    = 1
            IProcFunc.dfn           = 0
            IProcFunc.accessKeyWrap = <span class="accesskey">|</span>
            
            // Expand all
            expAll                  = 1
            
            // Wrap
            wrap                    = <div><ul> | </ul></div>
            
            // Normal state
            NO {
                
                // LinkWrap
                linkWrap        = -&nbsp;|
                
                // Link wrap
                wrapItemAndSub  = <li> | </li>
                
                // Title tag
                ATagTitle.field = abstract // description // title
            }
            
            // Active state
            ACT                < .NO
            ACT                = 1
            ACT.wrapItemAndSub = <li class="act"> | </li>
            
            // CURRENT state
            CUR                < .NO
            CUR                = 1
            CUR.wrapItemAndSub = <li class="cur"> | </li>
            
            SPC                < .NO
            SPC                = 1
            SPC.wrapItemAndSub = <li class="spc"> | </li>
            SPC.linkWrap       = <div>|</div>
        }
        
        // Other levels
        2 < .1
    }
}

// Condition for the home page
[treeLevel = 0]
    lib.menus.level2.10.value = {page:title}
[GLOBAL]
