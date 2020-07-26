using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProductDetailsAPI.Models;

namespace ProductDetailsAPI.Services
{
  public interface IProductService
  {
    public List<Product> GetProducts();
  }
}
