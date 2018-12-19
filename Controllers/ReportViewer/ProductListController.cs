#region Copyright Syncfusion Inc. 2001-2018.
// Copyright Syncfusion Inc. 2001-2018. All rights reserved.
// Use of this code is subject to the terms of our license.
// A copy of the current license can be obtained at any time by e-mailing
// licensing@syncfusion.com. Any infringement will be prosecuted under
// applicable laws. 
#endregion
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
//using Syncfusion.JavaScript.Models;
using MVCSampleBrowser.Models;

namespace MVCSampleBrowser.Controllers
{
    public partial class ReportViewerController : Controller
    {
        //
        // GET: /ProductList/

        public ActionResult ProductList()
        {
            ProductList prodlist = new Models.ProductList();
            ViewData["reportDsource"] = prodlist.GetData();
            return View();
        }

    }
}
