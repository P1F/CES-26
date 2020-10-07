document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.querySelector('#canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight*0.7;
    canvas.style.border = "2px solid black";
    
    const ctx = canvas.getContext("2d");
    
    const plane = document.querySelector('#plane');
    let plane_x = canvas.width/2;
    let plane_y = canvas.height/2;
    let plane_hit = false;

    const missile = document.querySelector('#missile');
    let missile_x = 0;
    let missile_y = canvas.height/2;
    let missile_launched = false;
    
    const explosion = document.querySelector('#explosion');

    const sound = document.querySelector("#sound");

    const soundfx = document.querySelector("#soundfx");
    soundfx.checked = true;

    const reset = document.querySelector('.reset > img');

    soundfx.addEventListener("click", function(){
        console.log("clicked!");
        if (!this.checked){
            sound.volume = 0;
        }
        else{
            sound.volume = 1;
        }
    });
    
    function refresh_coordinates(){
        canvas.addEventListener("mousemove", function(e){
            if (e.clientX >= missile.width + plane.width){
                plane_x = e.clientX - plane.width;
            }
            plane_y = e.clientY - plane.height/2;
            missile_y = plane_y + 10;
        });
        canvas.addEventListener("click", function(){
            missile_launched = true;
        });
    }

    function draw(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (missile_launched){
            missile_x+=5;
        }
        if (missile_launched && missile_x >= plane_x - missile.width + 20){
            plane_hit = true;
        }
        ctx.drawImage(missile, missile_x, missile_y, missile.width, missile.height);
        ctx.drawImage(plane, plane_x, plane_y, plane.width, plane.height);
        if (!plane_hit){
            window.requestAnimationFrame(draw);
        } else {
            ctx.drawImage(explosion, plane_x-50, plane_y-30, explosion.width*0.2, explosion.height*0.2);
            sound.currentTime = 1;
            if (soundfx.checked){
                sound.play();
            }
        }
    }

    reset.onclick = function reset(){
        plane_x = canvas.width/2;
        plane_y = canvas.height/2;
        plane_hit = false;

        missile_x = 0;
        missile_y = canvas.height/2;
        missile_launched = false;

        sound.load();
        draw();
    }

    refresh_coordinates();
    draw();
});

