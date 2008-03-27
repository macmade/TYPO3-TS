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

// Add RSS to the header
page.headerData.10                              = COA
page.headerData.10.10                           = TEXT
page.headerData.10.10.value                     = <link rel="alternate" type="application/rss+xml" title="RSS Feed" href="
page.headerData.10.20                           = TEXT
page.headerData.10.20.typolink                  = 1
page.headerData.10.20.typolink.parameter.data   = TSFE:id
page.headerData.10.20.typolink.additionalParams = &type=100
page.headerData.10.20.typolink.returnLast       = url
page.headerData.10.30                           = TEXT
page.headerData.10.30.value                     = ">

/** 
 * TS Setup - TT News configuration
 *
 * @author      Jean-David Gadina <info@macmade.net>
 * @version     1.0
 */
plugin.tt_news {
    
    // Only display translated news
    //sys_language_mode            = strict
    
    // PID for single display
    singlePid                    = 95
    
    // PID for archives
    archiveTypoLink.parameter    = 94
    
    // Allow caching
    allowCaching                 = 1
    
    // Limit
    limit                        = 10
    
    // Latest limit
    latestLimit                  = 2
    
    // Back PID
    backPid                      =

    // Search PID
    searchPid                    = 94
    
    // Start with an empty search
    emptySearchAtStart           = 0

    // Use htmlspecialchars for back link
    hscBackLink                  = 1

    // Substitute page title
    substitutePagetitle          = 1
    
    // No news message wrap
    noNewsToListMsg_stdWrap.wrap = <p> | </p>
   
    // News items rendering
    general_stdWrap {
        
        parseFunc < tt_content.text.20.parseFunc
    }

    /**
     * Page browser settings
     */
    pageBrowser {
        
        // Max number of pages
        maxPages         = 10
        
        // Display text with numbers
        showPBrowserText = 0
        
        // Table parameters
        tableParams      = cellpadding="5" align="center"
        
        // Show result count
        showResultCount  = 1
    }

    // Display language labels
    showLangLabels = 0
    
    // Display language flags
    showFlags      = 0
    
    /**
     * Flag image
     */
    flagImage {
        
        // Maximum width
        file.maxW = 16
    }

    // Category settings
    catImageMode                   = 1
    catTextMode                    = 1
    maxCatImages                   = 10
    maxCatTexts                    = 10
    catImageMaxWidth               = 25
    catImageMaxHeight              = 25
    useSPidFromCategory            = 1

    // Archive after # days
    datetimeDaysToArchive          = 120
    
    // Enable archive date
    enableArchiveDate              = 1
    
    // TypoLink configuration
    pageTypoLink.parameter.current = 1
    
    // Reverse archive menu
    reverseAMenu                   = 1
    
    // No empty elements in the archive menu
    archiveMenuNoEmpty             = 1
    
    /**
     * Archive title
     */
    archiveTitleCObject {
        
        // Time format
        10.strftime = %B %Y
        
        // Time format
        20.strftime = %B %Y
    }
    
    // Time format for related objects
    tmp.20.strftime = %d.%m.%Y %H:%M

    /**
     * Single view
     */
    displaySingle {
        
        // Date format
        date_stdWrap.strftime = %A, %d %B %Y
        
        // Time format
        time_stdWrap.strftime = %H:%M
        time_stdWrap.wrap     = | <br/>
    }
    
    /**
     * Single view image
     */
    displaySingle.image {
        
        // Max width
        file.maxW = 250
        
        // Max height
        file.maxH = 150
    }
    
    /**
     * Latest view
     */
    displayLatest {
        
        // Date format
        date_stdWrap.strftime       = %d.%m.%Y
        
        // Time format
        time_stdWrap.strftime       = %H:%M
        
        // Crop subheader
        subheader_stdWrap.crop      = 100 | ... | 1
        
        // Erase HTML tags
        subheader_stdWrap.stripHtml = 1
    }
    
    /**
     * Latest view image
     */
    displayLatest.image {
        
        // Max width
        file.maxW = 50
        
        // Max height
        file.maxH = 50
    }
    
    /**
     * List view
     */
    displayList {
        
        // Date format
        date_stdWrap.strftime       = %d.%m.%Y
        
        // Time format
        time_stdWrap.strftime       = %d.%m.%Y %H:%M
        
        // Crop subheader
        subheader_stdWrap.crop      = 100 | ... | 1
        
        // Erase HTML tags
        subheader_stdWrap.stripHtml = 1
    }
    
    /**
     * List view image
     */
    displayList.image {
        
        // Max width
        file.maxW = 250
        
        // Max height
        file.maxH = 150
    }
}
