using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PaymentDetails.Models;

namespace PaymentDetails.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentDetailController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PaymentDetailController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/PaymentDetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PaymentDetail>>> GetMyProperty()
        {
            return await _context.MyProperty.ToListAsync();
        }

   

        // PUT: api/PaymentDetail/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPaymentDetail(int id, PaymentDetail paymentDetail)
        {
            if (id != paymentDetail.PMid)
            {
                return BadRequest();
            }

            _context.Entry(paymentDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PaymentDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


        // GET: api/PaymentDetail/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PaymentDetail>> GetPaymentDetail(int id)
        {
            var paymentDetail = await _context.MyProperty.FindAsync(id);

            if (paymentDetail == null)
            {
                return NotFound();
            }

            return paymentDetail;
        }



        // POST: api/PaymentDetail
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<PaymentDetail>> PostPaymentDetail(PaymentDetail paymentDetail)
        {
            _context.MyProperty.Add(paymentDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPaymentDetail", new { id = paymentDetail.PMid }, paymentDetail);
        }

        // DELETE: api/PaymentDetail/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PaymentDetail>> DeletePaymentDetail(int id)
        {
            var paymentDetail = await _context.MyProperty.FindAsync(id);
            if (paymentDetail == null)
            {
                return NotFound();
            }

            _context.MyProperty.Remove(paymentDetail);
            await _context.SaveChangesAsync();

            return paymentDetail;
        }

        private bool PaymentDetailExists(int id)
        {
            return _context.MyProperty.Any(e => e.PMid == id);
        }
    }
}
