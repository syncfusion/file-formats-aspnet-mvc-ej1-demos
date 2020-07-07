window.GroupingList = ["GRIDS", "VISUALIZATION", "LAYOUT", "EDITORS", "NAVIGATION","REPORTING", "NOTIFICATION", "BUSINESSINTELLIGENCE", "DATASCIENCE", "FILE FORMATS"];

//Controls List
window.SampleControls = [
    { "name": "PDF" },{ "name": "PDFViewer" },{ "name": "DocIO" }, { "name": "XlsIO" }, { "name": "Presentation" }
];
//Samples List
window.SamplesList = [
    
                			   {
                			       "name": "XlsIO", "id": "XlsIO", "childcount": "1", "Group": "FILE FORMATS", "controller": "XlsIO", "type": "update", "action": "Default", "samples": [
                        { "id": "1", "name": "Default", "controller": "XlsIO", "action": "Default", "childcount": "0" },
                        {
                            "id": "2", "name": "Product Showcase", "controller": "XlsIO", "action": "BudgetPlanner", "childcount": "1", samples: [
                                { "id": "1", "name": "Budget Planner", "controller": "XlsIO", "action": "BudgetPlanner", "childcount": "0" },
								{ "id": "2", "name": "Attendance Tracker", "controller": "XlsIO", "action": "AttendanceTracker", "childcount": "0" }
                            ]
                        },
                        {
                            "id": "3", "name": "Getting Started", "controller": "XlsIO", "action": "Create", "childcount": "1", samples: [
                                { "id": "1", "name": "Create", "controller": "XlsIO", "action": "Create", "childcount": "0" },
                                { "id": "2", "name": "Find And Extract", "controller": "XlsIO", "action": "FindAndExtract", "childcount": "0" },
			        { "id": "3", "name": "Replace Options", "controller": "XlsIO", "action": "ReplaceOptions", "childcount": "0" }
                            ]
                        },
                        {
                            "id": "4", "name": "Formatting", "controller": "XlsIO", "action": "FormatCells", "childcount": "1", samples: [
                                { "id": "1", "name": "Format Cells", "controller": "XlsIO", "action": "FormatCells", "childcount": "0" },
                                { "id": "2", "name": "Styles And Formatting", "controller": "XlsIO", "action": "StylesAndFormatting", "childcount": "0" },
                                { "id": "3", "name": "Conditional Formatting", "controller": "XlsIO", "action": "ConditionalFormatting", "childcount": "0", "type": "update" }
                            ]
                        },
                        {
                            "id": "5", "name": "Charts", "controller": "XlsIO", "action": "ChartWorksheet", "childcount": "1", samples: [
                                { "id": "1", "name": "Chart Worksheet", "controller": "XlsIO", "action": "ChartWorksheet", "childcount": "0" },
                                { "id": "2", "name": "Embedded Chart", "controller": "XlsIO", "action": "EmbeddedChart", "childcount": "0" },
                                { "id": "3", "name": "Sparklines", "controller": "XlsIO", "action": "Sparklines", "childcount": "0" },
								{ "id": "4", "name": "Box and Whisker", "controller": "XlsIO", "action": "BoxAndWhisker",  "childcount": "0" },
								{ "id": "5", "name": "Funnel", "controller": "XlsIO", "action": "FunnelChart", "childcount": "0" },
								{ "id": "6", "name": "Treemap", "controller": "XlsIO", "action": "Treemap",  "childcount": "0" },
								{ "id": "7", "name": "Sunburst", "controller": "XlsIO", "action": "Sunburst",  "childcount": "0" }		    
                            ]
                        },
                        {
                            "id": "6", "name": "Formulas", "controller": "XlsIO", "action": "Formulas", "childcount": "1", samples: [                                
                                { "id": "1", "name": "Formulas", "controller": "XlsIO", "action": "Formulas", "childcount": "0" },
                                { "id": "2", "name": "Compute All Formulas", "controller": "XlsIO", "action": "ComputeAllformulas", "childcount": "0" },
				{ "id": "3", "name": "Table Formula", "controller": "XlsIO", "action": "TableFormula", "childcount": "0" },
                                { "id": "4", "name": "External Formula", "controller": "XlsIO", "action": "ExternalFormula", "childcount": "0" }
                            ]

                        },
                        {
                            "id": "7", "name": "Data Management", "controller": "XlsIO", "action": "RangeManipulation", "childcount": "1", samples: [
                                { "id": "1", "name": "Range Manipulation", "controller": "XlsIO", "action": "RangeManipulation", "childcount": "0" },
                                { "id": "2", "name": "Data Validation", "controller": "XlsIO", "action": "DataValidation", "childcount": "0" },
                                { "id": "3", "name": "Performance", "controller": "XlsIO", "action": "Performance", "childcount": "0" },
                                { "id": "4", "name": "Interactive Features", "controller": "XlsIO", "action": "InteractiveFeatures", "childcount": "0" },
                                { "id": "5", "name": "Form Controls", "controller": "XlsIO", "action": "FormControls", "childcount": "0" },
                                { "id": "6", "name": "Data Sorting", "controller": "XlsIO", "action": "DataSorting", "childcount": "0" },
                                { "id": "7", "name": "Filters", "controller": "XlsIO", "action": "AutoFilter", "childcount": "0" }								
                            ]

                        },
                        {
                            "id": "8", "name": "Data Binding", "controller": "XlsIO", "action": "ExternalConnection", "childcount": "1", samples: [
                                { "id": "1", "name": "External Connection", "controller": "XlsIO", "action": "ExternalConnection", "childcount": "0" },
                                { "id": "2", "name": "Template Marker", "controller": "XlsIO", "action": "TemplateMarker", "childcount": "0" },
                                { "id": "3", "name": "Collection Objects", "controller": "XlsIO", "action": "CollectionObjects",  "childcount": "0" },
                                { "id": "4", "name": "Import Nested Collection", "controller": "XlsIO", "action": "ImportNestedCollection",  "childcount": "0" },
                                { "id": "5", "name": "Invoice", "controller": "XlsIO", "action": "Invoice", "childcount": "0" },
                                { "id": "6", "name": "Import JSON", "controller": "XlsIO", "action": "ImportJSON", "childcount": "0" },
                                { "id": "7", "name": "Import HTML Table", "controller": "XlsIO", "action": "HTMLToWorksheet", "childcount": "0", "type":"new" }									
                            ]
                        },
                        {
                            "id": "9", "name": "Sheet Management", "controller": "XlsIO", "action": "RowColumnManipulation", "childcount": "1", samples: [
                                { "id": "1", "name": "Row-Column Manipulation", "controller": "XlsIO", "action": "RowColumnManipulation", "childcount": "0" },
                                { "id": "2", "name": "Worksheet Management", "controller": "XlsIO", "action": "WorksheetManipulation", "childcount": "0" }
                            ]
                        },
						{
                            "id": "10", "name": "Export", "controller": "XlsIO", "action": "ExcelToPDF", "childcount": "1", samples: [
                                { "id": "1", "name": "Excel To PDF", "controller": "XlsIO", "action": "ExcelToPDF", "childcount": "0" },
								{ "id": "2", "name": "Worksheet To Image", "controller": "XlsIO", "action": "WorksheetToImage", "childcount": "0" },
								{ "id": "3", "name": "Excel To ODS", "controller": "XlsIO", "action": "ExcelToODS", "childcount": "0" },
								{ "id": "4", "name": "Excel To JSON", "controller": "XlsIO", "action": "ExcelToJSON", "childcount": "0", "type":"new" }
                            ]
                        },
                        {
                            "id": "11", "name": "Settings", "controller": "XlsIO", "action": "DocumentationSettings", "childcount": "1", samples: [
                                { "id": "1", "name": "Documentation Settings", "controller": "XlsIO", "action": "DocumentationSettings", "childcount": "0" },
                                { "id": "2", "name": "Worksheet Protection", "controller": "XlsIO", "action": "WorksheetProtection", "childcount": "0" },
                                { "id": "3", "name": "Workbook Protection", "controller": "XlsIO", "action": "WorkbookProtection", "childcount": "0" },
                                { "id": "4", "name": "Encrypt and Decrypt", "controller": "XlsIO", "action": "EncryptAndDecrypt", "childcount": "0" }
                            ]
                        },
                        {
                            "id": "12", "name": "Business Intelligence", "controller": "XlsIO", "action": "Tables", "childcount": "1", samples: [
                                { "id": "1", "name": "Tables", "controller": "XlsIO", "action": "Tables", "childcount": "0" },
                                { "id": "2", "name": "Pivot Table", "controller": "XlsIO", "action": "PivotTable", "childcount": "0" },
                                { "id": "3", "name": "Pivot Chart", "controller": "XlsIO", "action": "PivotChart", "childcount": "0" }
                            ]
                        },
                        {
                            "id": "13", "name": "Shapes", "controller": "XlsIO", "action": "AutoShapes", "childcount": "1", samples: [
                                { "id": "1", "name": "AutoShapes", "controller": "XlsIO", "action": "AutoShapes", "childcount": "0" },
								{ "id": "2", "name": "Group Shapes", "controller": "XlsIO", "action": "GroupShapes", "childcount": "0" }
                            ]
                        },
                        {
                            "id": "14", "name": "Macros", "controller": "XlsIO", "action": "Macros", "childcount": "1", samples: [
                                { "id": "1", "name": "Create Macro", "controller": "XlsIO", "action": "CreateMacro", "childcount": "0" },
								{ "id": "2", "name": "Edit Macro", "controller": "XlsIO", "action": "EditMacro", "childcount": "0"  }
                            ]
                        }
                			       ]
                			   },
                                         {
										
                                             "name": "PDF", "id": "PDF", "Group": "FILE FORMATS", "childcount": "2", "controller": "Pdf", "action": "Default", "samples": [

                                        { "id": "1", "name": "Default", "controller": "Pdf", "action": "Default", "childcount": "0" },

                                        {
                                            "id": "2", "name": "Product Showcase", "controller": "Pdf", "action": "JobApplication", "childcount": "3", "samples": [
                                         { "id": "1", "name": "Job Application", "controller": "Pdf", "action": "JobApplication", "childcount": "0" },
                                         { "id": "2", "name": "Invoice Sample", "controller": "Pdf", "action": "InvoiceSample", "childcount": "0" },
										 { "id": "3", "name": "ZUGFeRD Invoice", "controller": "Pdf", "action": "ZugFerd", "childcount": "0" }
										 
                                            ]
                                        },
                                        {
                                            "id": "3", "name": "Getting Started", "controller": "Pdf", "action": "HelloWorld", "childcount": "1", "samples": [
                                           { "id": "1", "name": "Hello World", "controller": "Pdf", "action": "HelloWorld", "childcount": "0" }
                                            ]
                                        },
										{
                                            "id": "4", "name": "Compression", "controller": "Pdf", "action": "PdfCompression", "childcount": "1", "samples": [
                                           { "id": "1", "name": "PDF Compression Level", "controller": "Pdf", "action": "PdfCompression", "childcount": "0" },
                                           { "id": "2", "name": "Compress Existing PDF", "controller": "Pdf", "action": "CompressExistingPDF", "childcount": "0" }
                                            
                                            ]
                                        },
                                          {
                                              "id": "5", "name": "Graphics", "controller": "Pdf", "action": "Barcode", "childcount": "1", "samples": [
                                           { "id": "1", "name": "Barcode", "controller": "Pdf", "action": "Barcode", "childcount": "0"},
                                           { "id": "2", "name": "Drawing Shapes", "controller": "Pdf", "action": "DrawingShapes", "childcount": "0" },
                                           { "id": "3", "name": "Graphic Brushes", "controller": "Pdf", "action": "GraphicBrushes", "childcount": "0" },
                                           { "id": "4", "name": "Image Insertion", "controller": "Pdf", "action": "ImageInsertion", "childcount": "0" }
                                              ]
                                          },

                                           {
                                               "id": "6", "name": "Tables", "controller": "Pdf", "action": "NorthwindReport", "childcount": "1", "samples": [
                                          { "id": "1", "name": "Northwind Report", "controller": "Pdf", "action": "NorthwindReport", "childcount": "0"},
										  { "id": "2", "name": "Adventure Cycle", "controller": "Pdf", "action": "AdventureCycle", "childcount": "0"},
                                          { "id": "3", "name": "Table Features", "controller": "Pdf", "action": "TableFeatures", "childcount": "0" }]
                                           },
                                            {
                                                "id": "7", "name": "Drawing Text", "controller": "Pdf", "action": "TextFlow", "childcount": "1", "samples": [
                                           { "id": "1", "name": "Text Flow", "controller": "Pdf", "action": "TextFlow", "childcount": "0" },
                                           { "id": "2", "name": "RTL Support", "controller": "Pdf", "action": "RtlSupport", "childcount": "0" },
                                           { "id": "3", "name": "Bullets and Lists", "controller": "Pdf", "action": "BulletsandLists", "childcount": "0" },
                                           { "id": "4", "name": "Multi Column HTML Text", "controller": "Pdf", "action": "MultiColumnHTMLText", "childcount": "0" },
										   { "id": "5", "name": "Complex Script", "controller": "Pdf", "action": "ComplexScript", "childcount": "0" },
										   { "id": "6", "name": "OpenType Font", "controller": "Pdf", "action": "OpenTypeFont", "childcount": "0"}
                                                ]
                                            },

                                             {
                                                 "id": "8", "name": "Security", "controller": "Pdf", "action": "Encryption", "childcount": "1", "samples": [
                                         { "id": "1", "name": "Encryption", "controller": "Pdf", "action": "Encryption", "childcount": "0" },
                                         { "id": "2", "name": "Digital Signature", "controller": "Pdf", "action": "DigitalSignature", "childcount": "0"},
                                         { "id": "3", "name": "Redaction", "controller": "Pdf", "action": "Redaction", "childcount": "0"}
                                                 ]
                                             },

                                              {
                                                  "id": "9", "name": "Settings", "controller": "Pdf", "action": "DocumentSettings", "childcount": "1", "samples": [
                                           { "id": "1", "name": "Document Settings", "controller": "Pdf", "action": "DocumentSettings", "childcount": "0" },
                                           { "id": "2", "name": "Page Settings", "controller": "Pdf", "action": "PageSettings", "childcount": "0" },
                                           { "id": "3", "name": "Headers and Footers", "controller": "Pdf", "action": "HeadersandFooters", "childcount": "0" },
                                           { "id": "4", "name": "Layers", "controller": "Pdf", "action": "Layers", "childcount": "0" }
                                                  ]
                                              },
                                              {
                                                  "id": "10", "name": "User Interaction", "controller": "Pdf", "action": "InteractiveFeatures", "childcount": "1", "samples": [
                                           { "id": "1", "name": "Interactive Features", "controller": "Pdf", "action": "InteractiveFeatures", "childcount": "0" },
                                           { "id": "2", "name": "Form Filling", "controller": "Pdf", "action": "FormFilling", "childcount": "0"},
                                           { "id": "3", "name": "Portfolio", "controller": "Pdf", "action": "Portfolio", "childcount": "0" },
                                           { "id": "4", "name": "Annotations", "controller": "Pdf", "action": "AnnotationFlatten", "childcount": "0"},
										   { "id": "5", "name": "Named Destination", "controller": "Pdf", "action": "NamedDestination", "childcount": "0"},
                                           { "id": "6", "name": "Bookmarks", "controller": "Pdf", "action": "Bookmarks", "childcount": "0"},
                                           { "id": "7", "name": "File Attachments", "controller": "Pdf", "action": "Attachments", "childcount": "0" },
                                           { "id": "8", "name": "XFA Form Creation", "controller": "Pdf", "action": "XFAFormCreation", "childcount": "0" },
                                           { "id": "9", "name": "XFA Form Filling", "controller": "Pdf", "action": "XFAFormFilling", "childcount": "0" }]
                                              },
                                                 {
                                                     "id": "12", "name": "Import and Export", "controller": "Pdf", "action": "TextExtraction", "childcount": "1", "samples": [
                                           { "id": "1", "name": "Text Extraction", "controller": "Pdf", "action": "TextExtraction", "childcount": "0" },
                                           { "id": "2", "name": "RTF to PDF", "controller": "Pdf", "action": "RTFtoPDF", "childcount": "0" },
                                           { "id": "3", "name": "Word to PDF", "controller": "Pdf", "action": "WordtoPDF", "childcount": "0" },
                                           { "id": "4", "name": "HTML to PDF", "controller": "Pdf", "action": "HtmltoPDF", "childcount": "0" },
                                           { "id": "5", "name": "XPS to PDF", "controller": "Pdf", "action": "XPStoPDF", "childcount": "0" },
                                           { "id": "6", "name": "TIFF to PDF", "controller": "Pdf", "action": "TiffToPdf", "childcount": "0"},
                                           { "id": "7", "name": "Image Extraction", "controller": "Pdf", "action": "ImageExtraction", "childcount": "0"},
                                           { "id": "8", "name": "Export as Image", "controller": "Pdf", "action": "ExportasImage", "childcount": "0"}]
                                                 },
                                        {
                                            "id": "13", "name": "Conformance", "controller": "Pdf", "action": "PdfConformance", "childcount": "2", "samples": [
                                           { "id": "1", "name": "PDF Conformance", "controller": "Pdf", "action": "PdfConformance", "childcount": "0" },
					                        { "id": "2", "name": "PDF to PDFA1b", "controller": "Pdf", "action": "PdfA1bConverter", "childcount": "0" }
                                           						   
                                            ]
                                        },

                                                       {
                                                           "id": "14", "name": "Modify Documents", "controller": "Pdf", "action": "MergeDocuments", "childcount": "1", "samples": [
                                           { "id": "1", "name": "Merge Documents", "controller": "Pdf", "action": "MergeDocuments", "childcount": "0" },
                                           { "id": "2", "name": "Split PDF", "controller": "Pdf", "action": "SplitPDF", "childcount": "0" },
                                           { "id": "3", "name": "Overlay Documents", "controller": "Pdf", "action": "OverlayDocuments", "childcount": "0" },
                                           { "id": "4", "name": "Booklet", "controller": "Pdf", "action": "Booklet", "childcount": "0" },
                                           { "id": "5", "name": "Import and Stamp", "controller": "Pdf", "action": "ImportAndStamp", "childcount": "0" },
                                           { "id": "6", "name": "Replace Images", "controller": "Pdf", "action": "ReplaceImages", "childcount": "0"},
                                           { "id": "7", "name": "Replace Fonts", "controller": "Pdf", "action": "ReplaceFonts", "childcount": "0" },
                                           { "id": "8", "name": "Rearrange Pages", "controller": "Pdf", "action": "RearrangePages", "childcount": "0" }]

                                                       },
                                                         
														 {
                                                             "id": "15", "name": "Accessibility", "controller": "Pdf", "action": "AutoTag", "childcount": "1", "samples": [
                                         { "id": "1", "name": "Autotag", "controller": "Pdf", "action": "AutoTag", "childcount": "0" },
										 { "id": "2", "name": "Customtag", "controller": "Pdf", "action": "CustomTag", "childcount": "0"  }
                                                             ]
                                                         }													 
                                             ]
                                         },
                                         {
                             "name": "PDF Viewer", "id": "PdfViewer", "Group": "FILE FORMATS", "childcount": "1","controller": "PdfViewer", "action": "Default", "isResponsive": "true", "samples": [
                              { "id": "1", "name": "Getting Started", "controller": "PdfViewer", "action": "Default", "childcount": "0" },
                             { "id": "2", "name": "Localization", "controller": "PdfViewer", "action": "Localization", "childcount": "0" },
                             { "id": "3", "name": "Form Filling", "controller": "PdfViewer", "action": "FormFilling", "childcount": "0" }
                             ]
                         },
                   {
                        "name": "DocIO", "id": "DocIO", "Group":"FILE FORMATS", "childcount": "3", "controller": "DocIO", "action": "Default", "samples": [
                         { "id": "1", "name": "Default", "controller": "DocIO", "action": "Default", "childcount": "0" },
                         {
                             "id": "2", "name": "Product Showcase", "controller": "DocIO", "action": "SalesInvoice", "childcount": "1", "samples": [
                                    { "id": "1", "name": "Sales Invoice", "controller": "DocIO", "action": "SalesInvoice", "childcount": "0" },
                                    { "id": "2", "name": "Update Fields", "controller": "DocIO", "action": "UpdateFields", "childcount": "0" }
                             ]
                         },
                         {
                             "id": "3", "name": "Getting Started", "controller": "DocIO", "action": "HelloWorld", "childcount": "1", "samples": [
                                     { "id": "1", "name": "Hello World", "controller": "DocIO", "action": "HelloWorld", "childcount": "0" }
                             ]
                         },
                         {
                             "id": "4", "name": "Editing", "controller": "DocIO", "action": "AdvancedReplace", "childcount": "1", "samples": [
                                      { "id": "1", "name": "Find and Highlight", "controller": "DocIO", "action": "FindandHighlight", "childcount": "0" },
                                      { "id": "2", "name": "Simple Replace", "controller": "DocIO", "action": "SimpleReplace", "childcount": "0" },
                                      { "id": "3", "name": "Advanced Replace", "controller": "DocIO", "action": "AdvancedReplace", "childcount": "0" },
                                      { "id": "4", "name": "Bookmark Contents", "controller": "DocIO", "action": "BookmarkNavigation", "childcount": "0" },
                                      { "id": "5", "name": "Clone and Merge", "controller": "DocIO", "action": "CloneandMerge", "childcount": "0" },
                                      { "id": "6", "name": "Forms", "controller": "DocIO", "action": "Forms", "childcount": "0" }
                             ]
                         },
                         {
                             "id": "5", "name": "Content Control", "controller": "DocIO", "action": "Form Filling and Protection", "childcount": "1", "samples": [
                                      { "id": "1", "name": "Form Filling and Protection", "controller": "DocIO", "action": "FormFillingAndProtection", "childcount": "0" },
                                      { "id": "2", "name": "XML Mapping", "controller": "DocIO", "action": "XMLMapping", "childcount": "0" }
                             ]
                         },
                         {
                             "id": "6", "name": "Insert Content", "controller": "DocIO", "action": "Bookmarks", "childcount": "1", "samples": [
                                      { "id": "1", "name": "Bookmarks", "controller": "DocIO", "action": "Bookmarks", "childcount": "0" },
                                      { "id": "2", "name": "Header and Footer", "controller": "DocIO", "action": "HeaderandFooter", "childcount": "0" },
                                      { "id": "3", "name": "Image Insertion", "controller": "DocIO", "action": "ImageInsertion", "childcount": "0" },
                                      { "id": "4", "name": "Insert OLE Object", "controller": "DocIO", "action": "InsertOLEObject", "childcount": "0" }
                             ]
                         },
                         {
                             "id": "7", "name": "Formatting", "controller": "DocIO", "action": "FormatTable", "childcount": "1", "samples": [
                                      { "id": "1", "name": "Format Table", "controller": "DocIO", "action": "FormatTable", "childcount": "0" },
                                      { "id": "2", "name": "Format Text", "controller": "DocIO", "action": "FormatText", "childcount": "0" },
                                      { "id": "3", "name": "RTL Support", "controller": "DocIO", "action": "RTLSupport", "childcount": "0" },
                                      { "id": "4", "name": "Styles", "controller": "DocIO", "action": "Styles", "childcount": "0" },
                                      { "id": "5", "name": "Table Styles", "controller": "DocIO", "action": "TableStyles", "childcount": "0" }
                             ]
                         },
                         {
                             "id": "8", "name": "Mail Merge", "controller": "DocIO", "action": "EmployeeReport", "childcount": "1", "samples": [
                                      { "id": "1", "name": "Employee Report", "controller": "DocIO", "action": "EmployeeReport", "childcount": "0" },
                                      { "id": "2", "name": "Mail Merge Event", "controller": "DocIO", "action": "MailMergeEvent", "childcount": "0" },
                      { "id": "3", "name": "Nested Mail Merge", "controller": "DocIO", "action": "NestedMailMerge", "childcount": "0" }
                             ]
                         },
                          {
                              "id": "9", "name": "Import and Export", "controller": "DocIO", "action": "DOCToEPub", "childcount": "1", "samples": [
                                       { "id": "1", "name": "Word to PDF", "controller": "DocIO", "action": "DOCtoPDF", "childcount": "0" },
                                       { "id": "2", "name": "Word to Image", "controller": "DocIO", "action": "WordtoImage", "childcount": "0" },
                                       { "id": "3", "name": "Word to WordML", "controller": "DocIO", "action": "WordToWordML", "childcount": "0" },
                                       { "id": "4", "name": "WordML to Word", "controller": "DocIO", "action": "WordMLToWord", "childcount": "0" },
                                       { "id": "5", "name": "RTF to Word", "controller": "DocIO", "action": "RTFToDoc", "childcount": "0" },
                                       { "id": "6", "name": "HTML to Word", "controller": "DocIO", "action": "HTMLtoDOC", "childcount": "0" },
									   { "id": "7", "name": "Word to ODT", "controller": "DocIO", "action": "DOCtoODT", "childcount": "0" },
                                       { "id": "8", "name": "Word to EPub", "controller": "DocIO", "action": "DOCToEPub", "childcount": "0" }
                              ]
                          },
                         {
                             "id": "10", "name": "Page Layout", "controller": "DocIO", "action": "InsertBreak", "childcount": "1", "samples": [
                                      { "id": "1", "name": "Insert Break", "controller": "DocIO", "action": "InsertBreak", "childcount": "0" },
                                      { "id": "2", "name": "Watermark", "controller": "DocIO", "action": "Watermark", "childcount": "0" }
                             ]
                         },
                          {
                              "id": "11", "name": "References", "controller": "DocIO", "action": "FootnotesandEndnotes", "childcount": "1", "samples": [
                                       { "id": "1", "name": "Table of Content", "controller": "DocIO", "action": "TableofContent", "childcount": "0" },
                              { "id": "2", "name": "Footnotes and Endnotes", "controller": "DocIO", "action": "FootnotesandEndnotes", "childcount": "0" }
                              ]
                          },
                           {
                               "id": "12", "name": "Shapes", "controller": "DocIO", "action": "AutoShapes", "childcount": "1", "samples": [
                                        { "id": "1", "name": "AutoShapes", "controller": "DocIO", "action": "AutoShapes", "childcount": "0" }
                               ]
                           },
                           {
                               "id": "13", "name": "Chart", "controller": "DocIO", "action": "PieChart", "childcount": "1", "samples": [
                                        { "id": "1", "name": "Pie Chart", "controller": "DocIO", "action": "PieChart", "childcount": "0" },
                                        { "id": "2", "name": "Bar Chart", "controller": "DocIO", "action": "BarChart", "childcount": "0" }
                               ]
                           },
                          {
                              "id": "14", "name": "View", "controller": "DocIO", "action": "DocumentSettings", "childcount": "1", "samples": [
                                       { "id": "1", "name": "Document Settings", "controller": "DocIO", "action": "DocumentSettings", "childcount": "0" },
                                       { "id": "2", "name": "Macro Preservation", "controller": "DocIO", "action": "MacroPreservation", "childcount": "0" }
                              ]
                          },
                          {
                              "id": "15", "name": "Security", "controller": "DocIO", "action": "DocumentProtection", "childcount": "1", "samples": [
                                       { "id": "1", "name": "Document Protection", "controller": "DocIO", "action": "DocumentProtection", "childcount": "0" },
                                       { "id": "2", "name": "Encrypt and Decrypt", "controller": "DocIO", "action": "EncryptandDecrypt", "childcount": "0" }
                              ]
                          }
                        ]
                    },
					{
                       "name": "Presentation", "id": "Presentation", "Group": "FILE FORMATS", "childcount": "2", "controller": "Presentation", "action": "Default", "samples": [

                                { "id": "1", "name": "Default", "controller": "Presentation", "action": "Default", "childcount": "0" },
                                
                                {
                                    "id": "2", "name": "Getting Started", "controller": "Presentation", "action": "HelloWorld", "childcount": "1", "samples": [
                                     { "id": "31", "name": "Hello World", "controller": "Presentation", "action": "HelloWorld", "childcount": "0" }
                                     ]
                                },
                                 {
                                     "id": "3", "name": "Slide Elements", "controller": "Presentation", "action": "Images", "childcount": "1", "samples": [
                                      { "id": "41", "name": "Images", "controller": "Presentation", "action": "Images", "childcount": "0" },
                                      { "id": "42", "name": "Slides", "controller": "Presentation", "action": "Slides", "childcount": "0" },
                                      { "id": "43", "name": "Tables", "controller": "Presentation", "action": "Tables", "childcount": "0" },
									  { "id": "44", "name": "Notes", "controller": "Presentation", "action": "Notes", "childcount": "0"},
									  { "id": "45", "name": "OLE Object", "controller": "Presentation", "action": "InsertOLEObject", "childcount": "0"},
									  {"id": "46", "name": "Comments", "controller": "Presentation", "action": "Comments", "childcount": "0"},
									  {"id": "47", "name": "Connectors", "controller": "Presentation", "action": "Connectors", "childcount": "0"}
                                     ]
                                 },
								 {
									"id": "4", "name": "Animation", "controller": "Presentation", "action": "Animation", "childcount": "1", "samples": [
									  { "id": "51", "name": "Create Animation", "controller": "Presentation", "action": "Animation", "childcount": "0" },
									  { "id": "52", "name": "Modify Animation", "controller": "Presentation", "action": "ModifyingAnimation", "childcount": "0" }]
								 },
                                   {
                                       "id": "5", "name": "Conversion", "controller": "Presentation", "action": "PPTXToImage", "childcount": "1", "samples": [
                                        { "id": "61", "name": "PPTX to Image", "controller": "Presentation", "action": "PPTXToImage", "childcount": "0" },
                                        { "id": "62", "name": "PPTX to PDF", "controller": "Presentation", "action": "PPTXToPdf", "childcount": "0" }

                                       ]
                                   },
                                    {
                                        "id": "6", "name": "Clone and Merge", "controller": "Presentation", "action": "CloningSlides", "childcount": "1", "samples": [
                                         { "id": "71", "name": "Cloning Slide", "controller": "Presentation", "action": "CloningSlides", "childcount": "0" },
                                         { "id": "72", "name": "Merging Presentations", "controller": "Presentation", "action": "MergingPresentation", "childcount": "0" }

                                        ]
                                    },
                                    {
                                        "id": "7", "name": "Security", "controller": "Presentation", "action": "EncryptAndDecrypt", "childcount": "1", "samples": [
                                         { "id": "81", "name": "Encryption and Decryption", "controller": "Presentation", "action": "EncryptAndDecrypt", "childcount": "0" }
                                        ]
                                    },
                                     {
                                         "id": "8", "name": "SmartArt", "controller": "Presentation", "action": "SmartArtCreation", "childcount": "1", "samples": [
                                       { "id": "91", "name": "SmartArt Creation", "controller": "Presentation", "action": "SmartArtCreation", "childcount": "0"},
                                       { "id": "92", "name": "Manipulating SmartArt", "controller": "Presentation", "action": "ManipulatingSmartArt", "childcount": "0"},
                                       { "id": "93", "name": "Customizing Appearance", "controller": "Presentation", "action": "CustomizingAppearance", "childcount": "0"}
                                         ]
                                     },
                                     {
                                         "id": "9", "name": "Chart", "controller": "Presentation", "action": "CreatingChart", "childcount": "1", "samples": [
                                       { "id": "101", "name": "Creating Chart", "controller": "Presentation", "action": "CreatingChart", "childcount": "0"},
                                       { "id": "102", "name": "Chart from Excel Data", "controller": "Presentation", "action": "ExcelDataToChart", "childcount": "0"},
                                       { "id": "103", "name": "Modifying Chart", "controller": "Presentation", "action": "ModifyingChart", "childcount": "0"}
                                         ]
                                     },
									 {
									"id": "10", "name": "Transition", "controller": "Presentation", "action": "SlideTransition", "childcount": "1", "samples": [
									  { "id": "111", "name": "Slide Transition", "controller": "Presentation", "action": "SlideTransition", "childcount": "0" }]									  
								 }
                                   ]
                               }
                    

];
