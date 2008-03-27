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
 * TS Setup - Level 1 configuration
 *
 * @author      Jean-David Gadina (info@macmade.net)
 * @version     1.0
 */
lib.menus.level1 = HMENU
lib.menus.level1 {
    
    entryLevel = 0
    1          = TMENU
    1 {
        
        // Accessibility settings
        IProcFunc               = user_cronaccessiblemenus->makeAccessible
        IProcFunc.accessKeys    = 1
        IProcFunc.dfn           = 0
        IProcFunc.accessKeyWrap = <span class="accesskey">|</span>
        
        // Wrap
        wrap                    = <ul> | </ul>
        
        // Normal state
        NO {
            
            // Link wrap
            linkWrap        = <div> | </div>
            
            // All wrap
            allWrap         = <li class="first">|</li> |*| <li> | </li>
            
            // Title tag
            ATagTitle.field = abstract // description // title
        }
        
        // Active state
        ACT          < .NO
        ACT          = 1
        ACT.linkWrap = <div class="act"> | </div>
    }
}
