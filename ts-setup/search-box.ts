/***************************************************************
 * Copyright notice
 * 
 * (c) 2004 Jean-David Gadina (macmade@gadlab.net)
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
 * TS Setup - Search box
 *
 * @author      Jean-David Gadina (macmade@gadlab.net)
 * @version     1.0
 */
lib.misc.searchBox = COA
lib.misc.searchBox {
        
        // Beginning of form tag
        10                           = TEXT
        10.value                     = <form action="
        
        // Form action URL
        20                           = TEXT
        20.typolink                  = 1
        20.typolink.parameter        = 15
        20.typolink.useCacheHash     = 1
        20.typolink.returnLast       = url
        
        // End of form tag
        30                           = TEXT
        30.value                     = " method="post" id="searchform"><div>
        
        // Input
        40                           = TEXT
        40.value                     = <input type="text" name="tx_indexedsearch[sword]" title="Search" size="15" />
        
        // Submit
        50                           = TEXT
        50.value                     = <input type="submit" id="sword-submit" class="sword-submit" title="Search" value="Search" />
        
        // Advanced search
        60                           = TEXT
        60.value                     = Advanced Search
        60.typolink.parameter        = 15
        60.typolink.useCacheHash     = 1
        60.typolink.additionalParams = &tx_indexedsearch[ext]=1
        60.wrap                      = <div>|</div>
        
        // End form tag
        70                           = TEXT
        70.value                     = </div></form>
    }
}
