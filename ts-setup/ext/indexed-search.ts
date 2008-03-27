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
 * TS Setup - IndexedSearch configuration
 *
 * @author      Jean-David Gadina <info@macmade.net>
 * @version     1.0
 */
plugin.tx_indexedsearch {
	
	// Template file
	templateFile       = EXT:indexed_search/pi/template_css.tmpl
	
	// Start
	search.rootPidList = 0
		
	// Display options
	show {
		
		// Rules
		rules                                  = 1
		
		// Parse times
		parsetimes                             = 1
		
		// Level 2 sections
		L2sections                             = 1
		
		// Level 1 sections
		L1sections                             = 1
		
		// All levels
		LxALLtypes                             = 1
		
		// Clear search box
		clearSearchBox                         = 1
		
		// Enable sub search checkbox
		clearSearchBox.enableSubSearchCheckBox = 1
		
		// Forbidden records
		forbiddenRecords                       = 0
		
		// Page links
		alwaysShowPageLinks                    = 1
		
		// Advanced search link
		advancedSearchLink                     = 1
		
		// Number of results
		resultNumber                           = 1
		
		// List of media types
		mediaList                              =
	}
	
	// Hide advanced options
	blind {
		
		// Match type
		type         = 0
		
		// Search operator
		defOp        = 0
		
		// Sections
		sections     = 0
		
		// Category
		freeIndexUid = 0
		
		// Media
		media        = 0
		
		// Order results
		order        = 0
		
		// Style
		group        = 0
		
		// Language
		lang         = 0
		
		// Order
		desc         = 0
		
		// Results at a time
		results      = 0
		
		// Extended resume
		extResume    = 0
	}
	
	// Add search word to linked pages
	forwardSearchWordsInResultLink = 1
	
	// Default variables
	_DEFAULT_PI_VARS {
		
		// Extended search
		ext       = 0
		
		// Extended resume
		extResume = 1
		
		// Match type
		type      = 1
		
		// Style
		group     = sections
	}
}
