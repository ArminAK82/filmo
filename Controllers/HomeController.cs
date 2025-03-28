using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using filmo.Models;
using System.Web.Mvc;

namespace filmo.Controllers
{
    public class HomeController : Controller
    {
        Filmo_DB tbl_value = new Filmo_DB();


        // GET: Home
        public ActionResult Index()
        {
            
            
            return View();
        }
    }
}