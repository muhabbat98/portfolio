        const carusel = document.getElementById("carusel")
        const caruselData = [
            { 
                id: 1,
                photo:'./public/assets/img/my-photo.png',
                add_text:"Pulatova Muhabbat Baxtiyor kizi"
            },
            {
                id: 2,
                file:'./public/assets/img/diplom.pdf',
                add_text: "Diplom"
            },
            {
                id: 3,
                file: './public/assets/img/ilova.pdf',
                add_text: "Diploma Supplement"
            },
            { 
                id: 4,
                gen_text: `Frontend Developer, React, Redux, Typescript, Styled Component`,
                add_text: "Fido Biznes"
            },
            // { 
            //     id: 5,
            //     gen_text: "Pulatova Muhabbat Baxtiyor kizi",
            //     add_text: "Pulatova Muhabbat Baxtiyor kizi"
            // },

        ];
        const createChild = ( direction, elem ) =>{
            const caruselElement = document.createElement( "DIV" );
            caruselElement.setAttribute( "class", "carusel-data" );
            if ( direction === "right" ){
                carusel.appendChild( caruselElement );
            } else{
                carusel.insertBefore( caruselElement, carusel.firstChild );
            }
            if ( elem.photo ){
                const photoElement = document.createElement( "IMG" );
                photoElement.setAttribute( 'src', elem.photo );
                caruselElement.appendChild( photoElement );
            }
                
            if ( elem.add_text ){
                const textElement = document.createElement( "div" );
                textElement.textContent = elem.add_text;
                caruselElement.appendChild( textElement );
            }
            if ( elem.file ){
                const fileElement = document.createElement( "OBJECT" );
                fileElement.setAttribute( "data", elem.file );
                fileElement.setAttribute( "type", "application/pdf" );
                fileElement.setAttribute( "width", "500px" );
                fileElement.setAttribute( "height", "400px" );
                caruselElement.appendChild( fileElement );
            }
            if ( elem.gen_text ){
                const textElement = document.createElement( "h3" );
                textElement.textContent = elem.gen_text;
                caruselElement.appendChild( textElement );
            }
            }

        let visibleContent = caruselData.slice(0,2)
        for(let one of visibleContent ){
            createChild("right", one)
        }

        for(let one of workPhoto.childNodes ){    
            if(one.tagName==="DIV"){
                one.addEventListener("mouseover",e=>{
                    one.childNodes[ 0 ].style.transform = 'scale(1.4)'
                    one.childNodes[ 0 ].style.transition = "all 1s ease"
                    one.childNodes[ 0 ].style.zIndex = "5"
                })
                one.addEventListener( "mouseleave", e =>{
                    one.childNodes[ 0 ].style.transform = 'scale(1.0)';
                    one.childNodes[ 0 ].style.transition = "all 1s ease";
                    one.childNodes[ 0 ].style.zIndex = "0";
                } )
            }
        }

       var wow = new WOW(
            {
                boxClass: 'wow',      
                animateClass: 'animated', 
                offset: 0,         
                mobile: true,      
                live: true,      
                callback: function ( box ){},
                scrollContainer: null,    
                resetAnimation: true,  
            }
        );
        wow.init();

        function openModal(){
            modal.style.display = 'flex';
        }
        function closeModal (){
            modal.style.display = 'none';
        }
        function scrollMe(e){
            const element = document.getElementById(e);
            element.scrollIntoView( { block: "start", behavior: "smooth" } );            
        }

        function btnControl(e){
            if( e === 1 ){                
                const removedElement = visibleContent.splice( 0, 1);
                carusel.removeChild( carusel.firstChild);
                if( caruselData[ visibleContent[ 0 ].id ] ){
                    visibleContent.push( caruselData[visibleContent[ 0 ].id] )  ;    
                    createChild( "right", visibleContent[ 1 ] );
                }
                else{
                    visibleContent.push( caruselData[0] ); 
                    createChild( "right", visibleContent[ 1 ] ); 
                }   
            }
            else if ( e === -1 ){               
                carusel.removeChild( carusel.lastChild );
                visibleContent.splice( 1, 1 );
                if ( caruselData[visibleContent[0].id - 2]){                    
                    visibleContent.unshift( caruselData[ visibleContent[ 0 ].id - 2 ] );
                    createChild( "left", visibleContent[ 0 ] ) ;   
                }
                else{
                    visibleContent.unshift( caruselData[ caruselData.length-1 ] );
                    createChild( "left", visibleContent[ 0 ] ) ;
                }
            }
        }