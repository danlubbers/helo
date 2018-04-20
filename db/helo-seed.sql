create table helo_users (
    id serial primary key, 
    username varchar(20),
    password varchar(20),
    profile_pic text 
);

create table helo_posts (
    id serial primary key,
    title varchar(45),
    img text, 
    content text, 
    author_id integer 
);

-- Dummy info for helo_users
insert into helo_users (username, password, profile_pic) values ('dummyname', 'dummypw', 'https://cdn.pixabay.com/photo/2016/08/15/10/01/face-1594936_960_720.png');
insert into helo_users (username, password, profile_pic) values ('dummyguy', 'dummyguypw', 'https://static.turbosquid.com/Preview/2015/10/04__11_31_29/Male_Crash_Test_Dummy_Head_36000.jpgc20dd08f-ae4c-462d-85b9-03b3ee6a33e5Original-1.jpg');

-- Dummy info for helo_posts
insert into helo_posts (title, img, content, author_id) values ('A Perfect Circle', 'https://cdn.shopify.com/s/files/1/1567/9469/products/img_1_1024x1024.png?v=1517845249', 'Eat the Elephant', null);

insert into helo_posts (title, img, content, author_id) values ('TOOL', 'https://i.ytimg.com/vi/6-uNyUmP9TA/maxresdefault.jpg', 'Lateralus', null);

insert into helo_posts (title, img, content, author_id) values ('Tyho', 'https://www.amazon.com/Awake-Tycho/dp/B00HWKJDNG', 'Awake', null);

-- alter table test
alter table helo_posts 
add test_column varchar(20)