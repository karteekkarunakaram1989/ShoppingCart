using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProductDetailsAPI.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProductDetailsAPI.Controllers
{
  [Route("api/checkout")]
  [ApiController]
  public class CheckoutController : ControllerBase
  {
    #region Properties

    private readonly ILogger<CheckoutController> _logger;

    #endregion

    #region Constructor

    public CheckoutController(ILogger<CheckoutController> logger)
    {
      _logger = logger;
    }

    #endregion

    #region Post Method: PlaceOrder

    [HttpPost]
    [Route("placeOrder")]
    public ActionResult<string> PlaceOrder([FromBody] List<CartItem> shippingOrder)
    {
      try
      {
        if(shippingOrder == null)
        {
          return BadRequest("Shipping Order is null.");
        }
        return Ok("Success");
      }
      catch (Exception ex)
      {
        // Logging to Default for now.
        _logger.LogError($"Something went wrong inside the PlaceOrder action: {ex}");
        return StatusCode((int)HttpStatusCode.InternalServerError, "Something went wrong in the server while placing the order.");
      }
    }

    #endregion
  }
}
