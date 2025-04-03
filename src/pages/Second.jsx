import { useState } from "react";
import { TextField, Button, Select, MenuItem, Card, CardContent, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { Search, Add } from "@mui/icons-material";
import "../component/style/Contest.css";

const filterOptions = ["IT", "디자인", "1천만원 미만", "2천만원 이상"];

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState([]);
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);

  const results = [
    { id: 1, title: "공모전 1", status: "접수중", daysLeft: 15 },
    { id: 2, title: "공모전 2", status: "마감임박", daysLeft: 15 },
    
  ];

  const handleAddFilter = (filter) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  return (
    <div className="container">

      
      <div className="searchBox">
        <TextField
          fullWidth
          variant="outlined"
          placeholder="검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: <Search className="searchIcon" />,
          }}
        />
      </div>
      
      <div className="filterContainer">
        {filters.map((filter, index) => (
          <Button key={index} variant="outlined" size="small" onClick={() => setFilters(filters.filter(f => f !== filter))}>
            {filter} ✕
          </Button>
        ))}
        <IconButton onClick={() => setFilterDialogOpen(true)}>
          <Add />
        </IconButton>
      </div>
      
      <Dialog open={filterDialogOpen} onClose={() => setFilterDialogOpen(false)}>
        <DialogTitle>검색 조건 추가</DialogTitle>
        <DialogContent>
          {filterOptions.map((option) => (
            <Button key={option} variant="outlined" onClick={() => handleAddFilter(option)} className="filterButton">
              {option}
            </Button>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setFilterDialogOpen(false)}>닫기</Button>
        </DialogActions>
      </Dialog>
      
      <p className="resultCount">검색결과 {results.length}건</p>
      
      <div className="sortContainer">
        <Select defaultValue="최신순" size="small">
          <MenuItem value="최신순">최신순</MenuItem>
        </Select>
      </div>
      
      <div className="cardGrid">
        {results.map((result) => (
          <Card key={result.id}>
            <CardContent>
              <div className="cardImage" />
              <p className="cardTitle">{result.title}</p>
              <div className="cardInfo">
                <span className="daysLeft">D-{result.daysLeft}</span>
                <span className={result.status === "접수중" ? "statusOpen" : "statusClosed"}>
                  {result.status}
                </span>
              </div>
              <p className="cardText">공모전 제목</p>
              <p className="cardText">주최기관</p>
              <p className="cardText">조회수 332</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}