  function main_image(){
    const image=document.querySelector(".hero-image");
    const main=document.querySelector(".hero-main");
    main.addEventListener("mousemove",()=>{
      image.style.transform="scale(1.1)"
      image.style.transition="transform 0.2s"
    })
    main.addEventListener("mouseout",()=>{
      image.style.transform="scale(1)"
      image.style.transition="transform 0.2s"
    })
  }
  main_image()
  function navbar_elements(){
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener("mousemove",()=>{
        link.style.color="gray"
      })
      link.addEventListener("mouseout",()=>{      
        link.style.color=""
      })
      link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
      // Remove color from previously clicked links
        document.querySelectorAll('.nav-links a').forEach(el => el.style.color = '');
        // Change the color of the clicked link
        link.style.color = "orange"
      });
    });
  }
  navbar_elements();
  function hero_section(){
    const getbutton = document.querySelector('.nav-button');

  getbutton.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default behavior if needed

    getbutton.style.backgroundColor = "orange"; // Set to orange

    // Revert color after 2 seconds (2000ms)
    setTimeout(() => {
      getbutton.style.backgroundColor = ""; // Revert to original color
    }, 2000);
  });



    // Alert on "Start Free Trial" Button Click
    const herobutton = document.querySelector('.hero-button');
    herobutton.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default behavior if needed
      herobutton.style.backgroundColor="orange"
      setTimeout(()=>{
        herobutton.style.backgroundColor=""
      },2000)
    });
  }
  hero_section();
  function discoverbuttons(){
  const discoverButton=document.querySelector(".discover-button")
    discoverButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
    
        
        alert('Button Clicked! Discovering more...');
    
        
        discoverButton.textContent = 'Loading...';
    
        discoverButton.style.backgroundColor="orange";

        setTimeout(()=>{
          discoverButton.textContent="Discover More";
          discoverButton.style.backgroundColor="";
        },2000)
    });  
  }
  discoverbuttons();

  function feature_section(){
    const image=document.querySelector(".features-image");
    const section=document.querySelector(".features-container");
    section.addEventListener("mouseover",function(){
      image.style.transform="scale(1.05)";
      image.style.transition="transform 0.2s"
    })
    section.addEventListener("mouseout",function(){
      image.style.transform="scale(1)";
    })
  }
  feature_section()
  function feature_card(){
    const cards = document.querySelectorAll(".feature-card");

    cards.forEach(card => {
      card.addEventListener("mouseover", function () {
        card.style.transform = "scale(1.1)";
        card.style.transition = "transform 0.3s"; 
        card.style.border="2px solid orange"
      });
    
      card.addEventListener("mouseout", function () {
        card.style.transform = "scale(1)";
        card.style.border=""
      });
    });
  }
  feature_card();
  function quote_section(){
    const section=document.querySelector(".quote-section");
    const container=document.querySelector(".quote-container");
    section.addEventListener("mouseover",()=>{
      container.style.transform="scale(1.1)"
      container.style.transition="transform 0.2s"
      container.style.border="2px solid orange"
    })
    section.addEventListener("mouseout",()=>{
      container.style.transform="scale(1)"
      container.style.transition="transform 0.2s"
      container.style.border=""
    })
  }
  quote_section();
  function testimonial(){
    const cards=document.querySelectorAll(".testimonial");
    cards.forEach(card=>{
      card.addEventListener("mouseover",()=>{
        card.style.transform="scale(1.1)"
        card.style.transition="transform 0.2s"
      })
      card.addEventListener("mouseout",()=>{
        card.style.transform="scale(1)"
        card.style.transition="transform 0.2s"
      })
    })
  }
  testimonial()