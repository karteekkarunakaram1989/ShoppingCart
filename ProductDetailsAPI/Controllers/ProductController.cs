using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProductDetailsAPI.Models;
using ProductDetailsAPI.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProductDetailsAPI.Controllers
{
  [Route("api/product")]
  [ApiController]
  public class ProductController : ControllerBase
  {
    #region Properties

    private readonly ILogger<ProductController> _logger;
    private readonly IProductService _productService;

    #endregion

    #region Constructor

    public ProductController(ILogger<ProductController> logger, IProductService productService)
    {
      _logger = logger;
      _productService = productService;
    }

    #endregion

    #region Get Method: GetAllProducts

    [HttpGet]
    [Route("getAllProducts")]
    public ActionResult<List<Product>> GetAllProducts()
    {
      try
      {
        var allProducts = _productService.GetProducts();
        return Ok(allProducts);
      }
      catch (Exception ex)
      {
        // Logging to Default for now.
        _logger.LogError($"Something went wrong inside the GetAllProducts action: {ex}");
        return StatusCode((int)HttpStatusCode.InternalServerError, "Something went wrong in the server while retrieving the Products info.");
      }
    }

    #endregion
  }
}
