import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuoteChartDetails } from 'src/app/_metronic/partials/content/widgets/charts/charts-custom-widget/charts-custom-widget.component';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http : HttpClient) { }

  API : string = 'https://localhost:5001/api';
  private headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  });

  getQuotes(filtersObj : any)
  {
    return this.http.post(`${this.API}/quotes/list`,filtersObj);
  }

  getQuotesDetails(quoteId: string)
  {
    return this.http.get(`${this.API}/quotes/Detail/${quoteId}`,{ headers : this.headers});
  }

  getGrid(filtersObj : any)
  {
    return this.http.get(`${this.API}/quotes/grid/${filtersObj.AccountManager}/${filtersObj.Department}/${filtersObj.QuoteStatus}/${filtersObj.Year}/${filtersObj.Month}/${filtersObj.Statustype}/${filtersObj.QuoteID}/${filtersObj.PageNumber}`,{ headers : this.headers });
  }

  getQuoteActivity(quoteId: string)
  {
    return this.http.get(`${this.API}/quotes/Detail/${quoteId}`,{ headers : this.headers});
  }
  getQuoteActivityDetails(quoteId: string)
  {
    return this.http.get(`${this.API}/quotes/GetQuoteActivity/${quoteId}`,{ headers : this.headers});
  }

  getReports(filtersObj : any)
  {
    return this.http.get(`${this.API}/quotes/GetReports/${filtersObj.Type}/${filtersObj.AccountManager}`,{ headers : this.headers });
  }

  getQuoteSummary(date : string,filtersObj : any)
  {
    return this.http.get(`${this.API}/quotes/GetQuoteSummary/${date}/${filtersObj.AccountManager}`,{ headers : this.headers });
  }

  getQuoteAccountManagers(dept: string)
  {
    return this.http.get(`${this.API}/quotes/GetManagers/${dept}`,{ headers : this.headers});
  }
  GetAppToBeSent(filtersObj:any){
    return this.http.get(`${this.API}/quotes/GetAppToBeSent/${filtersObj.AccountManager}/${filtersObj.QuoteStatus}/${filtersObj.Statustype}`,{ headers : this.headers });
  }
  GetSiteDetails(filtersObj:any){
    return this.http.get(`${this.API}/quotes/GetSiteDetails/${filtersObj.AccountManager}/${filtersObj.Type}`,{ headers : this.headers });
  }
  GetSearchedSiteDetails(text: any){
    return this.http.get(`${this.API}/quotes/GetSearchedSiteDetails/${text}`,{ headers : this.headers });
  }


  getQuoteStatus()
  {
    return this.http.get(`${this.API}/quotes/GetStatus`,{ headers : this.headers});
  }

  getQuoteYearChartDetails()
  {
    return this.http.get<QuoteChartDetails[]>(`${this.API}/quotes/GetQuoteChartDetails`,{ headers : this.headers});
  }
  updateQuoteStatus(quotes: string, status: string)
  {
    return this.http.put(`${this.API}/quotes/UpdateStatus/${quotes}/${status}/Admin`,{});
  }
  updateQuote(id: string, quote: any)
  {
    return this.http.put(`${this.API}/quotes/UpdateQuote/${id}/${quote.contactName}/${quote.contactEmail}/${quote.quoteStatus}/${quote.Notes}/${quote.quotePriority}/${quote.quoteOwner}/z/1`,{});
  }

  updateAppToBeSentStatus(quotes: string)
  {
    return this.http.put(`${this.API}/quotes/UpdateToBeSentStatus/${quotes}/Admin`,{});
  }
  searchedQuoteGrid(text: string | undefined, pageNumber: number)
  {
    return this.http.get<QuoteChartDetails[]>(`${this.API}/quotes/searchedgrid/${text}/${pageNumber}`,{ headers : this.headers});
  }
  // updateStopQuoteReminders(quotes: string, type?: string, remindType?: string, stopDaysCount? : number)
  // {
  //   return this.http.put(`${this.API}/quotes/UpdateStopReminders/${quotes}/${type}/${stopDaysCount}/${remindType}/Admin`,{});
  // }
  updateStopQuoteReminders(quotes: string, data: any)
  {
    return this.http.put(`${this.API}/quotes/UpdateStopReminders/${quotes}/${data.Type}/${data.StopDaysCount}/${data.RemindType}/Admin`,{});
  }

}

