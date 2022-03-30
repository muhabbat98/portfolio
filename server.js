const http = require( 'http' );
const fs = require( 'fs' );
var path = require('path');
const PORT = process.env.PORT || 3000;

const accountSid = 'AC4652f65526467651e4e7a514d995a97b';
const authToken = '6ba81e331f6a9e6e7461e788a1f08e6c';

const client = require( 'twilio' )( accountSid, authToken );


const server = http.createServer( ( req, res ) =>
{
    
    if(req.url === "/"){
     req.on( 'data', (e) =>
    {
        let bodyData = e.toString( 'utf-8' ).slice(e.toString( 'utf-8' ).indexOf('=')+1).replace('+',' ')
   
         if ( bodyData.trim().length )
         {
             client.messages.create( {
                body: bodyData,
                from: '+13252405955',
                to: '+998909903391'  
                
             } ).then( ( m ) => console.log( 'id', m.sid ) )
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