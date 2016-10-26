using System.Web.Mvc;

namespace TrainingWeb.Features.HelloWorld
{
    public partial class HelloWorldController : Controller
    {
        public virtual ActionResult Default()
        {
            return View(Views.HelloWorld);
        }
    }
}