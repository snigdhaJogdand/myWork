import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AuthService } from './auth.service';
import { AuthService } from './auth.service';
import { SecureService } from './secure.service';
import { Http, HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormUpdateComponent } from './form-update/form-update.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { DisplayuserComponent } from './displayuser/displayuser.component';
import { EgComponent } from './eg/eg.component';
import { FinalComponent } from './final/final.component';
import { UpdateComponent } from './update/update.component';
import { AbcComponent } from './abc/abc.component';
import { DoorGuard } from './door.guard';
import { SecuredGuard } from './secured.guard';
import { ExampleGuard } from './example.guard';
import { DefComponent } from './def/def.component';
import { XyzComponent } from './xyz/xyz.component';
import { TestService } from './test.service';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { DemoComponent } from './demo/demo.component';
import { CookieService } from 'ngx-cookie-service';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { PloginComponent } from './plogin/plogin.component';
import { PComponent } from './p/p.component';
import { NsotableComponent } from './nsotable/nsotable.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { EntryComponent } from './entry/entry.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { ExampleCheckboxComponent } from './example-checkbox/example-checkbox.component';
import { FilterPipe } from './filter.pipe';
import { ColumnFilterPipe } from './column-filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { ColumnNameFilterPipe } from './column-name-filter.pipe';
import { FilterComponent } from './filter/filter.component';
import { OrderrByPipePipe } from './orderr-by-pipe.pipe';
import { ViewAttendanceListComponent } from './view-attendance-list/view-attendance-list.component';
import { DatePipe } from '@angular/common';
import { DataTableExampleComponent } from './data-table-example/data-table-example.component';
import { Angular4TableModule } from 'angular4-table';
import { FullCalendarModule } from 'ng-fullcalendar';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    FormUpdateComponent,
    HomeComponent,
    IndexComponent,
    AddComponent,
    DisplayuserComponent,
    EgComponent,
    FinalComponent,
    UpdateComponent,
    AbcComponent,
    DefComponent,
    XyzComponent,
    DemoComponent,
    TestComponent,
    Test2Component,
    PloginComponent,
    PComponent,
    NsotableComponent,
    AttendenceComponent,
    EntryComponent,
    HeaderComponent,
    FooterComponent,
    NavigationHeaderComponent,
    ChangePasswordComponent,
    StudentRegistrationComponent,
    ViewStudentComponent,
    ExampleCheckboxComponent,
    FilterPipe,
    ColumnFilterPipe,
    ColumnNameFilterPipe,
    FilterComponent,
    OrderrByPipePipe,
    ViewAttendanceListComponent,
    DataTableExampleComponent,
  ],
  imports: [
    FullCalendarModule,
    Angular4TableModule,
    NgxPaginationModule,
    BrowserModule,
    JwtModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule.forRoot
      (
        [
          { path: '', component: IndexComponent },
          { path: 'register', component: RegisterComponent },
          { path: 'login', component: LoginComponent },
          { path: 'update', component: FormUpdateComponent, canActivate: [DoorGuard] },
          { path: 'home', component: HomeComponent, canActivate: [DoorGuard] },
          { path: 'abc', component: AbcComponent, canActivate: [DoorGuard] },
          { path: 'attendence', component: AttendenceComponent, canActivate: [DoorGuard] },
          { path: 'entry', component: EntryComponent, canActivate: [DoorGuard] },
          { path: 'changePassword', component: ChangePasswordComponent, canActivate: [DoorGuard] },
          { path: 'studentRegistration', component: StudentRegistrationComponent, canActivate: [DoorGuard] },
          { path: 'viewStudent', component: ViewStudentComponent, canActivate: [DoorGuard] },
          { path: 'viewStudentDetails', component: ExampleCheckboxComponent, canActivate: [DoorGuard] },
          { path: 'filter', component: FilterComponent, canActivate: [DoorGuard] },
          { path: 'viewStudentList', component: ViewAttendanceListComponent, canActivate: [DoorGuard] },

          { path: 'DataTableExampleComponent', component: DataTableExampleComponent },
          { path: 'xyz', component: XyzComponent },
          { path: 'demo', component: DemoComponent },
          { path: 'test2', component: Test2Component },
          { path: 'test', component: TestComponent },
          { path: 'plogin', component: PloginComponent },
          { path: 'p', component: PComponent },
          { path: 'nsotable', component: NsotableComponent }
        ]
      )
  ],
  providers: [DatePipe, AuthService, DoorGuard, SecureService, SecuredGuard, ExampleGuard, TestService, JwtHelperService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
