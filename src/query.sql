--insert into services (name , image , description) values
--( 'Logo Design' ,
-- 'https://drive.google.com/file/d/1o9tcnqIrBu0SIr_J_Bbau43jsbRaPiHI/view?usp=sharing' ,
-- 'Redefining the purpose of logo design' )
--
--insert into plans (color , features , name ,price , "serviceId") values
--( '#92fff9',array ['2 Unique Logo Samples','2 Logo Designers Will Work','1 Stationery Design Concepts','Business Card Design (Up To 1 Contact Names)','Envelope','1 Revision','No Clip Arts','Full Copyright'],'ripple', '$ 139', 1 );
--
--insert into highlights (description , image , "name" , "serviceId")
--values  (
--'Keeping psychology and readability in mind, even before deciding on color, contrast, space, balance, shape, and media — the first design decision we ever make is selecting the right font. To convey the right messaging directly to the users, crafting the logo with relevant typography is our top priority.',
--'https://drive.google.com/file/d/1o9tcnqIrBu0SIr_J_Bbau43jsbRaPiHI/view?usp=sharing' ,
--'Typography matters' , 1
--)
--
--insert into reviews (image , review) values
--(  'https://drive.google.com/file/d/1o9tcnqIrBu0SIr_J_Bbau43jsbRaPiHI/view?usp=sharing' ,
--'I’m truly glad of taking a decision to work with Think Surf Media. It is one of the best logo design companies that I have ever come across. From giving them a brief about my requirements to fetching the complete logo design, everything went smooth.\n Wynne \n Demaco, Florida '
--)
--
--insert into portfolios (images , website) values
--( array  [ 'https://drive.google.com/file/d/1o9tcnqIrBu0SIr_J_Bbau43jsbRaPiHI/view?usp=sharing' , 'https://drive.google.com/file/d/1o9tcnqIrBu0SIr_J_Bbau43jsbRaPiHI/view?usp=sharing'],
--'https://drive.google.com/file/d/1o9tcnqIrBu0SIr_J_Bbau43jsbRaPiHI/view?usp=sharing'
--)

select * from services
select * from highlights
select * from plans
select * from reviews
select * from portfolios


UPDATE services
SET image = 'http://192.168.29.86:3232/one-image.jpg'
WHERE id =1;

UPDATE highlights
SET image = 'http://192.168.29.86:3232/one-image.jpg'
WHERE id =1;


UPDATE reviews
SET image = 'http://192.168.29.86:3232/one-image.jpg'
WHERE id =2;

UPDATE portfolios
SET images = array ['http://192.168.29.86:3232/one-image.jpg']
WHERE id =1;

UPDATE portfolios
SET images = array ['http://192.168.29.86:3232/one-image.jpg']
WHERE id =1;