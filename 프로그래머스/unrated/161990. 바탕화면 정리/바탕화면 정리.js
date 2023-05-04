function solution(wallpaper) {
    // x1, y1은 작게 작게
    // x2, y2는 크게크게
    let [xmin, ymin, xmax, ymax] = [0, 0, 0, 0];
    let first_contact = true;
    for(let i = 0; i < wallpaper.length; i++)
        for(let j = 0; j < wallpaper[i].length; j++){
            if(wallpaper[i][j] === '#'){
                if(first_contact){
                    xmin = i;
                    ymin = j;
                    xmax = i+1;
                    ymax = j+1;
                    first_contact = false;
                }
                else
                    xmin = xmin > i ? i : xmin;
                    ymin = ymin > j ? j : ymin;
                    xmax = xmax < i+1 ? i+1 : xmax;
                    ymax = ymax < j+1 ? j+1 : ymax;
                }
        }       
    return [xmin, ymin, xmax, ymax] ;
}

// 이해가 잘 안된다. 이해 필요