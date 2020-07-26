using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductDetailsAPI.Services
{
  public interface IShippingService
  {
    public int GetShippingCost(decimal totalPrice);
  }
}
