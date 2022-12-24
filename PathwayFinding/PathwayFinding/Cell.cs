namespace PathwayFinding
{
    public class Cell
    {
        public enum CELL_STATUS
        {
            START,
            END,
            BARRIER,
            OPEN,
            CLOSED,
            NORMAL
        }

        public int Row { get; set; }

        public int Col { get; set; }

        public string ElementId { get; set; }

        public string ElementClassName { get; set; }

        public List<Cell> Neighbors { get; set; }

        public CELL_STATUS Status { get; set; }

        public Cell(int argRow, int argCol)
        {
            Row = argRow;
            Col = argCol;
            Status = CELL_STATUS.NORMAL;

            ElementId = $"{argRow}_{argCol}";
            ElementClassName = "grid-cell";

        }

    }
}
