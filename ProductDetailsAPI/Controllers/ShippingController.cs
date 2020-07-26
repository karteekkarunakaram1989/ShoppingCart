using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProductDetailsAPI.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProductDetailsAPI.Controllers
{
  [Route("api/shipping")]
  [ApiController]
  public class ShippingController : ControllerBase
  {
    #region Properties

    private readonly ILogger<ShippingController> _logger;
    private readonly IShippingService _shippingService;

    #endregion

    #region Constructor

    public ShippingController(ILogger<ShippingController> logger, IShippingService shippingService)
    {
      _logger = logger;
      _shippingService = shippingService;
    }

    #endregion

    #region Get Method: GetShippingCost

    [HttpGet]
    [Route("getShippingCost")]
    public ActionResult<int> GetShippingCost(decimal totalPrice)
    {
      try
      {
        if (totalPrice < -1)
        {
          return BadRequest("Total Price is invalid.");
        }
        int shippingCharges = _shippingService.GetShippingCost(totalPrice);
        return Ok(shippingCharges);
      }
      catch (Exception ex)
      {
        // Logging to Default for now.
        _logger.LogError($"Something went wrong inside the GetShippingCost action: {ex}");
        return StatusCode((int)HttpStatusCode.InternalServerError, "Something went wrong in the server while retrieving the shipping charges.");
      }
    }

    #endregion
  }
}
