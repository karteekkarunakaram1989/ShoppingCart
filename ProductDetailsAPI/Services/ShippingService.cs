using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductDetailsAPI.Services
{
  public class ShippingService : IShippingService
  {
    public int GetShippingCost(decimal totalPrice)
    {
      return totalPrice > 50 ? 20 : 10;
    }
  }
}
