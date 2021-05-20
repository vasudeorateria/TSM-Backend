select * from portfolios

###
UPDATE portfolios
SET images = array [
'https://thinksurfmedia.herokuapp.com/portfolios/egp/egp1.jpg',
'https://thinksurfmedia.herokuapp.com/portfolios/egp/egp2.jpg',
'https://thinksurfmedia.herokuapp.com/portfolios/egp/egp3.jpg'] ,
website = 'https://thinksurfmedia.com'
WHERE id =1;

###

insert into portfolios (id ,images , website) values
( 3 ,
array [
'https://thinksurfmedia.herokuapp.com/portfolios/kozynap/kozynap1.jpg',
'https://thinksurfmedia.herokuapp.com/portfolios/kozynap/kozynap2.jpg',
'https://thinksurfmedia.herokuapp.com/portfolios/kozynap/kozynap3.jpg'] ,
'https://thinksurfmedia.com'
)
insert into portfolios (id ,images , website) values
( 4 ,
array [
'https://thinksurfmedia.herokuapp.com/portfolios/mays/mays1.jpg',
'https://thinksurfmedia.herokuapp.com/portfolios/mays/mays2.jpg',
'https://thinksurfmedia.herokuapp.com/portfolios/mays/mays3.jpg'] ,
'https://thinksurfmedia.com'
)
insert into portfolios (id ,images , website) values
( 5 ,
array [
'https://thinksurfmedia.herokuapp.com/portfolios/one-sports-lounge/osl1.jpg',
'https://thinksurfmedia.herokuapp.com/portfolios/one-sports-lounge/osl2.jpg',
'https://thinksurfmedia.herokuapp.com/portfolios/one-sports-lounge/osl3.jpg'] ,
'https://thinksurfmedia.com'
)
insert into portfolios (id ,images , website) values
( 6 ,
array [
'https://thinksurfmedia.herokuapp.com/portfolios/pind-punjabi-dhaba/pind1.jpg',
'https://thinksurfmedia.herokuapp.com/portfolios/pind-punjabi-dhaba/pind2.jpg',
'https://thinksurfmedia.herokuapp.com/portfolios/pind-punjabi-dhaba/pind3.jpg',
'https://thinksurfmedia.herokuapp.com/portfolios/pind-punjabi-dhaba/pind4.jpg'] ,
'https://thinksurfmedia.com'
)

select * from portfolios