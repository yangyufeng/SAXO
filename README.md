
    location ~* (^/app|^/activity|^/activity_2|^/activity_3|^/activity_4|^/wscnclub_1|^/wscnclub_2|^/downloadapp.html) {
       rewrite /app/(.*) http://activity.wallstreetcn.com/static_events/app/$1 break;
       rewrite /activity/(.*) http://activity.wallstreetcn.com/static_events/activity/$1 break;
       rewrite /activity_2/(.*) http://activity.wallstreetcn.com/static_events/activity_2/$1 break;
       rewrite /activity_3/(.*) http://activity.wallstreetcn.com/static_events/activity_3/$1 break;
       rewrite /activity_4/(.*) http://activity.wallstreetcn.com/static_events/activity_4/$1 break;
       rewrite /wscnclub_1/(.*) http://activity.wallstreetcn.com/static_events/wscnclub_1/$1 break;
       rewrite /wscnclub_2/(.*) http://activity.wallstreetcn.com/static_events/wscnclub_2/$1 break;
       rewrite /downloadapp.html http://activity.wallstreetcn.com/static_events/downloadapp.html break;

    }












    location /app/ {
       rewrite /app/(.*) http://activity.wallstreetcn.com/static_events/app/$1 break;
    }

    location /activity/ {
       rewrite /activity/(.*) http://activity.wallstreetcn.com/static_events/activity/$1 break;
    }

    location /activity_2/ {
       rewrite /activity_2/(.*) http://activity.wallstreetcn.com/static_events/activity_2/$1 break;
    }

    location /activity_3/ {
       rewrite /activity_3/(.*) http://activity.wallstreetcn.com/static_events/activity_3/$1 break;
    }

    location /activity_4/ {
       rewrite /activity_4/(.*) http://activity.wallstreetcn.com/static_events/activity_4/$1 break;
    }

    location /wscnclub_1/ {
       rewrite /wscnclub_1/(.*) http://activity.wallstreetcn.com/static_events/wscnclub_1/$1 break;
    }

    location /wscnclub_2/ {
       rewrite /wscnclub_2/(.*) http://activity.wallstreetcn.com/static_events/wscnclub_2/$1 break;
    }

    location /downloadapp.html {
       rewrite /downloadapp.html http://activity.wallstreetcn.com/static_events/downloadapp.html break;
    }


