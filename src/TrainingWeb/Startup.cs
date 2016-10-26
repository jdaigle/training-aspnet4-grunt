using System.Web.Mvc;
using System.Web.Routing;

namespace TrainingWeb
{
    public static class Startup
    {
        public static void ApplicationStart()
        {
            MvcHandler.DisableMvcResponseHeader = true;

            RegisterRoutes(RouteTable.Routes);
        }

        private static void RegisterRoutes(RouteCollection routes)
        {
            // ignore
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.IgnoreRoute("assets/{*pathInfo}");
            routes.IgnoreRoute("features/{*pathInfo}");

            // most specific
            routes.MapMvcAttributeRoutes();

            // more general
            AreaRegistration.RegisterAllAreas();

            // most general
            routes.MapRoute(
                 name: "Default",
                 url: "{controller}/{action}",
                 defaults: new { action = "Default" }
             );

            // settings
            routes.LowercaseUrls = true;
        }
    }
}