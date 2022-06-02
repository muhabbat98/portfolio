const http = require( 'http' );
const fs = require( 'fs' );
var path = require('path');
const PORT = process.env.PORT || 3000;

const accountSid = 'AC4652f65526467651e4e7a514d995a97b';
const authToken = 'f1baa271182ea60e924894b1aaf71b78';
const nodeMailer = require('nodemailer')
const client = require( 'twilio' )( accountSid, authToken );


const server = http.createServer( ( req, res ) =>
{
    
    if(req.url === "/"){
     req.on( 'data', async(e) =>
    {
        let bodyData = e.toString( 'utf-8' ).slice(e.toString( 'utf-8' ).indexOf('=')+1).replace('+',' ')
        let testAccount = await nodeMailer.createTestAccount();
         if ( bodyData.trim().length )
         {
            let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user:  testAccount.user,
              pass:  testAccount.pass
          }
      });
      let mailOptions = {
          from: 'bmpmuhabbatpulatova98@gmail.com', // sender address
          to: 'bmpmuhabbatpulatova98@gmail.com', // list of receivers
          subject: 'email', // Subject line
          text: bodyData, // plain text body
          html: '<b>NodeJS Email</b>' // html body
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
            //   res.('index');
          });
        }
     } );
        fs.readFile( "index.html", "utf-8", function ( err, html )
        {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
    }else if(req.url?.match("\.css$")){
        var cssPath = path.join( __dirname, req.url );
        var fileStream = fs.createReadStream(cssPath, "utf-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);

    }else if(req.url?.match("\.png$")){
        var imagePath = path.join(__dirname,  req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "image/png"});
        fileStream.pipe(res);
    }else if(req.url?.match("\.jpg$")){
        var imagePath = path.join(__dirname,  req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "image/png"});
        fileStream.pipe(res);
    }
    else if ( req.url?.match( "\.pdf$" ) )
    {
        var imagePath = path.join(__dirname,  req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "application/pdf"});
        fileStream.pipe(res);
    }
    else if(req.url?.match("\.woff2$")){
        var imagePath = path.join(__dirname,  req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "font/woff2"});
        fileStream.pipe(res);
    }
    else if(req.url?.match("\.js$")){
        var jsPath = path.join(__dirname,  req.url);
        var fileStream = fs.createReadStream(jsPath);
        res.writeHead(200, {"Content-Type": "text/javascript"});
        fileStream.pipe(res);
    }else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("No Page Found");
    }
   
});


server.listen( PORT, () =>
{
    console.log(PORT)
})