$(function(){

    var i=0;
    panovnici.forEach(function(obj){
        var vypisPanovnici = $('div .'+obj.genus);
        vypisPanovnici.append('<li><b>'+ obj.name+ ' '+obj.years+'</b></li>');
        (i==panovnici.length)?i=panovnici.length:i++;
        console.log(obj.genus);

    });

    $('#rody p').hide();
    $('#rody li').hide();
    $('#rody ol').hide();
    $('#rody h4').on('click', function(){
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({'background-color':'#38a'});
        } else {
            $(this).css({'background-color':'#003200'});
        }
        $(this).nextUntil('h4').toggle(500);
    });

    var kviz = $('#kviz div.row');
    panovnici_kviz.forEach(function(obj, idx){
        kviz.append('<div class="col-sm-4"><figure id="'+idx+'"><img src="img/panovnik0.jpg" alt="panovnik"><figcaption>'
        +obj.name+'</figcaption></figure></div>');
    });

var index=0;
var photo = $('#kviz img');
photo.on('click',function(){
    index = Math.floor(Math.random()*panovnici_kviz.length);
    if(change==0)
    $(this).attr('src','img/'+panovnici_kviz[index].photo)
           .attr('alt',panovnici_kviz[index].name);
});

    var uspech=0;
    var nejvetsi_uspech=0;
    var change=0;
    var check = $('#kviz .btn-success');
    check.on('click', function(){
        $('#kviz figure').each(function(idx,obj){
            var figcaption = $(obj).find('figcaption').text();
            var alt = $(obj).find('img').attr('alt');
            if (figcaption == alt) {
                $(obj).find('img').css({'border':'2px solid green'}); 
                uspech++;
            } else {
                $(obj).find('img').css({'border':'2px solid red'});
            }
            change=1;
            $('#kviz .btn-dark').css({'border':'4px solid red'});
        });
        $('#kviz .uspech').append().text('úspěšnost = '+Math.round((uspech/panovnici_kviz.length)*100)+'%');     
    });

    var restart =$('#kviz .btn-dark');
    restart.on('click', function(){
        $('#kviz img').attr('src','img/panovnik0.jpg');
        $('#kviz img').attr('alt','');
        $('#kviz img').css({'border':'none'});
        $('#kviz .btn-dark').css({'border':'none'});
        if(Math.round((uspech/panovnici_kviz.length)*100)>nejvetsi_uspech){
            nejvetsi_uspech=Math.round((uspech/panovnici_kviz.length)*100);
        }
        uspech=0;
        $('#kviz .nejvetsi-uspech').append().text('největší úspěšnost = '+nejvetsi_uspech+'%');
        $('#kviz .uspech').append().text('úspěšnost = '+Math.round((uspech/panovnici_kviz.length)*100)+'%');
        change=0;
        }); 
              
    var e=0;
    var i=0;
    var odkazy = $('#odkazy #1');
    panovnici.forEach(function(obj, idx){
        if(i%10==0){
            e++;
            odkazy = $('#odkazy #'+e);
        }
        odkazy.append('<li><a href="'+obj.link+'" target="_blank">'
        +obj.name+'</a></li>');
        (i==panovnici.length)?i=panovnici.length:i++;
    });

    

})