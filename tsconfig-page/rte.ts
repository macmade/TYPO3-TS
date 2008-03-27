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
 * Page TS Config - Rich Text Editor Setup
 * 
 * @author      Jean-David Gadina <info@macmade.net>
 * @version     2.0
 */
RTE {
    
    // Colors definition
    colors {
        
        color1 {
            
            name  = Orange / TYPO3
            value = #FF8700
        }
        color2 {
            
            name  = Green / macmade.net
            value = #8CE500
        }
        color3 {
            
            name  = Orange / macmade.net
            value = #FF4D00
        }
        color4 {
            
            name  = Blue / macmade.net
            value = #00B2FF
        }
        color5 {
            
            name  = Pink / macmade.net
            value = #FF0080
        }
        color6 {
            
            name  = Gray / macmade.net
            value = #4D4D4D
        }
    }
    
    // Classes definition
    classes >
    
    // Anchor classes definition
    classesAnchor >
    classesAnchor {
        
        // Extenral
        externalLink {
            
            type    = url
            altText = LLL:EXT:rtehtmlarea/htmlarea/plugins/TYPO3Browsers/locallang.xml:external_link_altText
        }
        
        // External in new window
        externalLinkInNewWindow {
            
            class   = external-link-new-window
            type    = url
            altText = LLL:EXT:rtehtmlarea/htmlarea/plugins/TYPO3Browsers/locallang.xml:external_link_new_window_altText
        }
        
        // Internal
        internalLink {
            
            class   = internal-link
            type    = page
            altText = LLL:EXT:rtehtmlarea/htmlarea/plugins/TYPO3Browsers/locallang.xml:internal_link_altText
        }
        
        // Internal in new window
        internalLinkInNewWindow {
            
            class   = internal-link-new-window
            type    = page
            altText = LLL:EXT:rtehtmlarea/htmlarea/plugins/TYPO3Browsers/locallang.xml:internal_link_new_window_altText
        }
        
        // Download
        download {
            
            class   = download
            type    = file
            altText = LLL:EXT:rtehtmlarea/htmlarea/plugins/TYPO3Browsers/locallang.xml:download_altText
        }
        
        // Mail
        mail {
            
            class   = mail
            type    = mail
            altText = LLL:EXT:rtehtmlarea/htmlarea/plugins/TYPO3Browsers/locallang.xml:mail_altText
        }
    }
    
    // Default RTE configuration (all tables)
    default {
        
        // Disable RTE
        disable = 0
        
        // Available classes for HTML elements
        classesParagraph >
        classesTable >
        classesTD >
        classesLinks >
        classesCharacter >
        classesAnchor >
        classesImage >
        
        // Anchor classes
        classesAnchor = external-link,external-link-new-window,internal-link,internal-link-new-window,download,mail
        
        // Default anchor classes
        classesAnchor.default {
            page = internal-link
            url = external-link-new-window
            file = download
            mail = mail
        }
        
        // Show tags from content CSS
        showTagFreeClasses = 0
        
        // Disable examples styles
        disablePCexamples = 1
        
        // Disable Typo3 specific browsers
        disableTYPO3Browsers = 0
        
        // Tab elements to remove in the picture popup
        blindImageOptions >
        
        // Default target for links
        defaultLinkTarget = _blank 
        
        // Tab elements to remove in the link popup
        blindLinkOptions >
        
        // Buttons to show
        showButtons = *
        
        // Buttons to hide
        hideButtons = fontstyle, fontsize, blockstyle, textstyle
        
        // Toolbar order
        toolbarOrder = pluginmacmade,formatblock, space, bar, space, bold, italic, underline, strikethrough, subscript, superscript, space, bar, space, left, center, right, justifyfull, space, bar, space, textcolor, bgcolor, textindicator, linebreak, lefttoright, righttoleft, space, bar, space, orderedlist, unorderedlist, outdent, indent, space, bar, space, link, image, insertcharacter, line, table, acronym, inserttag, emoticon, user, linebreak, findreplace, removeformat, spellcheck, space, bar, space, copy, cut, paste, space, bar, space, undo, redo, space, bar, space, chMode, showhelp, about, linebreak, toggleborders, space, bar, space, tableproperties, rowproperties, rowinsertabove, rowinsertunder, rowdelete, rowsplit, columninsertbefore, columninsertafter, columndelete, columnsplit, cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge
        
        // Group buttons (Mozilla only)
        keepButtonGroupTogether = 1
        
        // Hide table operations
        hideTableOperationsInToolbar = 0
        
        // Show toggle borders item even if table operations are disabled
        keepToggleBordersInToolbar = 0
        
        // Disable contextual menu
        disableContextMenu = 0
        disableRightClick = 0
        
        // Display status bar
        showStatusBar = 1
        
        // Disable color picker
        disableColorPicker = 0
        
        // Disable color selector
        disableSelectColor = 0
        
        // RTE stylesheet
        contentCSS = fileadmin/templates/rte.css
        
        // MS Word cleaning
        enableWordClean = 1
        
        // Remove HTML comments
        removeComments = 1
        
        // Remove HTML tags
        removeTags = font
        
        // Remove HTML tags and their content
        removeTagsAndContents =
        
        // Use CSS formatting when possible
        useCSS = 1
        
        // Disable enter key for new paragraphs creation
        disableEnterParagraphs = 0
        
        // Remove trailing BR if any
        removeTrailingBR = 1
        
        // Hide tags in the quick tag plugin
        hideTags = font, font (full)
        
        // Disable table attributes for table operations
        disableAlignmentFieldsetInTableOperations = 0
        disableSpacingFieldsetInTableOperations = 0
        disableColorFieldsetInTableOperations = 0
        disableLayoutFieldsetInTableOperations = 0
        disableBordersFieldsetInTableOperations = 0
        
        // Colors available
        colors = color1,color2,color3,color4,color5,color6
        
        // Processing rules
        proc {
            
            // Transformation method
            overruleMode = ts_css
            
            // Do not convert BR into linebreaks
            dontConvBRtoParagraph = 1
            
            // Map paragraph tag
            remapParagraphTag = p
            
            // Tags allowed outside P & DIV
            allowTagsOutside = hr, address
            
            // Tags allowed
            allowTags = a, abbr, acronym, address, blockquote, b, br, caption, center, cite, code, div, em, font, h1, h2, h3, h4, h5, h6, hr, i, img, li, link, ol, p, pre, q, sdfield, span, strike, strong, sub, sup, table, thead, tbody, tfoot, td, th, tr, tt, u, ul
            
            // Tags denied
            denyTags >
            
            // Attributes to keep for P & DIV
            keepPDIVattribs = xml:lang,class,style,align
            
            // Tags allowed outside <p> and <div> tags
            allowTagsOutside = img,hr,table,tr,th,td,h1,h2,h3,h4,h5,h6,br,ul,ol,li,pre,address
            
            // Tags allowed in Typolists
            allowTagsInTypolists = br,font,b,i,u,a,img,span
            
            // Keep unknown tags
            dontRemoveUnknownTags_db = 1
            
            // Allow tables
            preserveTables = 1
            
            // Entry HTML parser
            entryHTMLparser_db = 1
            entryHTMLparser_db {
                
                // Tags allowed
                allowTags < RTE.default.proc.allowTags
                
                // Tags denied
                denyTags >
                
                // HTML special characters
                htmlSpecialChars = 0
                
                // Allow IMG tags
                tags.img >
                
                // Allow attributes
                tags.span.fixAttrib.style.unset >
                tags.p.fixAttrib.align.unset >
                tags.div.fixAttrib.align.unset >
                
                // Additionnal attributes for P & DIV
                div.allowedAttribs = class,style,align
                p.allowedAttribs = class,style,align
                
                // Tags to remove
                removeTags = center, font, o:p, sdfield, strike, u
                
                // Keep non matched tags
                keepNonMatchedTags = protect
            }
            
            // HTML parser
            HTMLparser_db {
                
                // Strip attributes
                noAttrib = br
                
                // XHTML compliance
                xhtml_cleaning = 1
            }
            
            // Exit HTML parser
            exitHTMLparser_db = 1
            exitHTMLparser_db {
                
                // Tags denied
                denyTags >
                
                // Remap bold and italic
                tags.b.remap = strong
                tags.i.remap = em
                
                // Keep non matched tags
                keepNonMatchedTags = 1
                
                // HTML special character
                htmlSpecialChars = 0
            }
        }
    }
}

// MS Word clean options
RTE.default.enableWordClean.HTMLparser < RTE.default.proc.entryHTMLparser_db

// Frontend RTE configuration
RTE.default.FE < RTE.default

// Full screen for bodytext (tt_content)
TCEFORM.tt_content.bodytext.RTEfullScreenWidth = 100%
