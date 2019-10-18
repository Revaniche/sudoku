module.exports = function solveSudoku(matrix) {
    
        var sudo_work = []
        for (var i=0; i<matrix.length; i++) {      // создаем рабочую копию массива
            sudo_work[i] = matrix[i].slice();
        }
        for (var i=0; i<sudo_work.length; i++) {      // перебор по столбцам массива
            for (j=0; j<sudo_work[i].length; ) {   // перебор по строкам массива
                sudo_is = false;
                top1:
                if (matrix[i][j]==0) {          // если изначально в ячейке был 0
                    for (k=sudo_work[i][j]+1; k<=9; k++) {      // подбор подходящей цифры 1..9 в ячейку
                        if (sudo_ch(sudo_work, i, j, k)) {
                            sudo_work[i][j] = k;
                            sudo_is = true;
                            break top1 ;
                        }
                    }
                }
                if (!sudo_is && matrix[i][j]==0) {   // нет подходящих значений, возврат назад на редактируемую ячейку
                    sudo_work[i][j] = 0;
                    while (true) {   
                        if (j==0) {i--; j=sudo_work[i].length-1} else {j--}
                        if (matrix[i][j]==0) break
                    }
                } else j++
            }
        }
        return(sudo_work)
        }
        
        function sudo_ch(arr, ind1, ind2, val) {
            for (var i=0; i<arr[ind1].length; i++) {        // проверка по строке
                if ((arr[ind1][i]==val) && (i!=ind2)) return (false)
            }
            for (var i=0; i<arr.length; i++) {              // проверка по столбцу
                if ((arr[i][ind2]==val) && (i!=ind1)) return (false)
            }
            for (var i = Math.floor(ind1/3)*3; i<Math.floor(ind1/3)*3+3; i++) {       // проверка 3х3
                for (var j = Math.floor(ind2/3)*3; j<Math.floor(ind2/3)*3+3; j++) {
                    if ((arr[i][j]==val) && !((i==ind1) && (j==ind2))) return (false)
                }
            }
            return (true)
        
        
        
}

