using System;

namespace TrainingWeb
{
    public class App : System.Web.HttpApplication
    {
        protected void Application_Start(object sender, EventArgs e) => Startup.ApplicationStart();
    }
}