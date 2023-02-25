const createError = require("http-errors");

//==========404 not fount handler=========

function notFountHandler(req, res, next) {
  next(createError(404, "Your request was Not Found"));
}


// ============default error handler===========

function errorHandler(err, req, res, next){
  res.locals.error = process.env.NODE_ENV === "developers" ? err :{message:err.message};

  res.status(err.status || 500)
  
  if(res.locals.html){
    // html response

    res.render(error, {
      title: "Error page"
    })
  }else{
    res.json(res.locals.error);
  }
  
}

module.exports ={
  notFountHandler,
  errorHandler,
}