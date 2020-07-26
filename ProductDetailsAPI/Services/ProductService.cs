using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProductDetailsAPI.Models;

namespace ProductDetailsAPI.Services
{
  public class ProductService : IProductService
  {
    public List<Product> GetProducts()
    {
      return new List<Product>()
      {
        new Product(){Id=1, Name="Apple", Description="Looks red in colour and tastes sweet.", Price=10, ImageUrl="../../assets/images/apple.png"},
        new Product(){Id=2, Name="Orange", Description="Looks orange in colour and tastes sweet and sour.", Price=20, ImageUrl="../../assets/images/orange.png"},
        new Product(){Id=3, Name="Grapes", Description="Looks purple in colour and tastes sweet and sour.", Price=30, ImageUrl="../../assets/images/grapes.png"},
        new Product(){Id=4, Name="Mango", Description="Looks yellow in colour and tastes sweet.", Price=20, ImageUrl="../../assets/images/mango.png"},
        new Product(){Id=5, Name="Banana", Description="Looks yellow in colour and tastes sweet.", Price=60, ImageUrl="../../assets/images/banana.png"},
        new Product(){Id=6, Name="Cherry", Description="Looks red in colour and tastes sweet.", Price=50, ImageUrl="../../assets/images/cherry.png"},
        new Product(){Id=7, Name="Watermelon", Description="Looks green in colour and tastes sweet.", Price=60, ImageUrl = "../../assets/images/watermelon.png"},
        new Product(){Id=8, Name="Strawberry", Description="Looks red in colour and tastes sweet.", Price=40, ImageUrl="../../assets/images/strawberry.png"}
      };
    }
  }
}
