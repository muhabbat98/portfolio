const http = require( 'http' );

const PORT = process.env.PORT || 3000;
const accountSid = 'AC4652f65526467651e4e7a514d995a97b';
const authToken = '952869454b310db5c0e6696596549d85';

const fs = require('fs');
const index = fs.readFileSync( 'index.html' );
const static = require('node-static');
const client = require( 'twilio' )( accountSid, authToken );

const fileServer = new static.Server( './public' );

const server = http.createServer( ( req, res ) =>
{
    // fileServer.serve( req, res )
    // fileServer.serve(req, res)
    
    req.on( 'data', (e) =>
    {
        let bodyData = e.toString( 'utf-8' )

        client.messages.create( {
            body: bodyData.slice(bodyData.indexOf('=')+1).replace('+',' '),
            from: '+13252405955',
            to: '+998909903391'  
            
        }).then((m)=>console.log(m.sid))
    } )
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end( index );
     req.addListener('end', function () {
        fileServer.serve(req, res);
    }).resume();
});


server.listen( PORT, () =>
{
    console.log(PORT)
})