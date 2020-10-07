function child(){
     return   `<ul>
                    <li>
                         <span class="element" onclick='highlight(this)'>CES-26</span>
                         <span class="buttons">
                              <button class='add' onclick='addChild(this)'>add</button>
                              <button class='del' onclick='remove(this)'>del</button>
                              <button class='fundo' onclick='fundo(this)'>fundo</button>
                         </span>
                    </li>
               </ul>`
}

function addChild(obj){
     $(obj).parent().parent().append(child);
}

function remove(obj){
     $(obj).parent().parent().remove();
}

function fundo(obj){
     $(obj).parent().parent().children().first().addClass("bckgrnd");
}

function highlight(obj){
     $(".element").each(function(){
          $(this).removeClass("bckgrnd txtcolor");
     })
     $(".buttons").each(function(){
          $(this).hide();
     })
     $(obj).addClass("txtcolor");
     $(obj).parent().children(".buttons").show();
}

$(document).ready(function(){
     $("#add").click(function(){
          $(".elements").append(child);
     });
});