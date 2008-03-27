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
 * TS Setup - Periph menu configuration
 *
 * @author      Jean-David Gadina (info@macmade.net)
 * @version     1.0
 */
lib.menus.periph = HMENU
lib.menus.periph {
    
    includeNotInMenu = 1
    special          = list
    special.value    = 121,120,16,17,18
    1                = TMENU
    1 {
        
        // Wrap
        wrap = <ul> | </ul>
        
        // Normal state
        NO {
            
            // Link wrap
            linkWrap                 = | &nbsp;&#124; |*| | &nbsp;&#124; |*| |
            
            // Wrap whole element
            wrapItemAndSub           = <li>|</li>
            
            // XHTML compliancy
            stdWrap.htmlSpecialChars = 1
            
            // Title tag
            ATagTitle.field          = abstract // description // title
        }
    }
}
