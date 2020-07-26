using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace ProductDetailsAPI.Services
{
  public static class ServiceExtensions
  {
    public static void ConfigureUserCreatedServices(this IServiceCollection services)
    {
      services.AddScoped<IProductService, ProductService>();
      services.AddScoped<IShippingService, ShippingService>();
      services.AddCors(options =>
      {
        options.AddPolicy("CorsPolicy",
          builder => builder.AllowAnyOrigin()
          .AllowAnyMethod()
          .AllowAnyHeader());
      });
    }
  }
}
