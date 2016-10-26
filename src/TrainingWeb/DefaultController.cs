using System.Web.Mvc;
using System.Web.Routing;

namespace TrainingWeb
{
    public class DefaultController : Controller
    {
        [Route("", Name = "Root")]
        public ActionResult Default()
        {
            return Redirect(Url.Action(MVC.HelloWorld.Default()));
        }
    }
}