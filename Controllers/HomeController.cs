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
        Filmo_DBE tbl_value = new Filmo_DBE();


        // GET: Home
        public ActionResult Index()
        {
            var res = tbl_value.tbl_filmo.ToList();
            ViewBag.titel = res.Where(x=>x.Titr=="Titel").Select(x => new {x.TextValue }).SingleOrDefault();
            return View();
        }
       
    }
}