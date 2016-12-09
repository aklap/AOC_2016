module.exports = { 
    getRows: function (lines) {
       return lines.map(function(l){
            return l.split('');
        });
    },

    transpose: function (rows) {
        return rows[0].map(function(_, j) {
            return rows.map(function(_, k) {
                var letter = rows[k][j];

                if(letter !== undefined) {
                    return letter;
                }
            }).filter(Boolean);
        });
    }
};