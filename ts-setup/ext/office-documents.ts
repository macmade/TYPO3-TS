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
 * TS Setup - Office Documents
 *
 * @author      Jean-David Gadina (info@macmade.net)
 * @version     1.0
 */
plugin.tx_rlmpofficedocuments_pi1 {
    
    // Page break settings
    pageBreaks {
        
        // Enable
        enable          = 1
        
        // Minimum characters per page
        minCharsPerPage = 1
        
        // Break pages by headings
        breakByHeadings {
            
            // Enable
            enable           = 1
            
            // Heading level
            level            = 3
            
            // Omit consecutives
            omitConsecutives = 1
        }
        
        // Table of contents
        TOC {
            
            // TOC mode
            mode         = dynamic
            
            // Begin with TOC
            startWithTOC = 1
            
            // Heading level
            level        = 3
        }
    }
}
