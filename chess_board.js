class ChessBoard {
  constructor(schema) {
    this.squares = convertSchemaToRows(schema);
  }

  static convertSchemaToRows(schema) {
    var rows = [];
    var width = Math.max.apply(Math, schema.map(function (el) { return el.length })); 
    schema.forEach(function(row)
    {
      var newRow = [];
      for (var i = 0; i < width; i++) {
        if (i >= row.length)
        {
          newRow.push(" ");
        }
        else
        {
          newRow.push(row[i]);
        }
      }
      rows.push(newRow);
    });
    return rows;
  }
}

class Square {
  constructor(allowsBlack, allowsWhite)
  {
    this.inbounds = allowsBlack && allowsWhite;
    this.outOfBounds = allowsBlack && !allowsWhite;
    this.exists = allowsBlack || allowsWhite;
    this.piece = null;
  }
}

class ChessPiece {
  constructor(isWhite)
  {
    this.isWhite = isWhite;
  }

  isOccupiable(square)
  {
    if (square.piece != null)
    {
      if (square.piece.isWhite == this.isWhite)
      {
        return false;
      }
    }
    if (!isWhite || square.inbounds)
    {
      return true;
    }
    return false;
  }

  availableSquares()
  {
    throw "not implemented in base class";  
  }
}

class Knight extends ChessPiece {

}
console.log(ChessBoard.convertSchemaToRows(["test this", "ok"]));
