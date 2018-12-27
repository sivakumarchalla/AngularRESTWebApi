using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AngularWebApi.Models;

namespace AngularWebApi.Controller
{
    [Route("api/Student")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private DataContext db = new DataContext();

        [Produces("application/json")]
        [HttpGet("findall")]
        public async Task<IActionResult> findAll()
        {
            try
            {
                var students = db.Students.ToList();
                return Ok(students);
            }catch
            {
                return BadRequest();
            }
        }

        [Produces("application/json")]
        [HttpGet("find/{id}")]
        public async Task<IActionResult> find(int id)
        {
            try
            {
                var student = db.Students.SingleOrDefault(p => p.Id == id);
                return Ok(student);
            }
            catch
            {
                return BadRequest();
            }
        }

        [Produces("application/json")]
        [Consumes("application/json")]
        [HttpPost("create")]
        public async Task<IActionResult> Create([FromBody] Student student)
        {
            try
            {
                db.Students.Add(student);
                db.SaveChanges();
                return Ok(student);
            }
            catch
            {
                return BadRequest();
            }
        }

        [Produces("application/json")]
        [Consumes("application/json")]
        [HttpPut("update")]
        public async Task<IActionResult> Update([FromBody] Student student)
        {
            try
            {
                db.Entry(student).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                db.SaveChanges();
                return Ok(student);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                db.Remove(db.Students.Find(id));
                db.SaveChanges();
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}