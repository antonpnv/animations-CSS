(()=>{"use strict";class t{constructor(){this.showFormBtn=document.querySelector(".show__form-btn"),this.formContainer=document.querySelector(".form__container"),this.contactForm=document.querySelector(".contact__form"),this.closeBtn=document.querySelector(".close__btn"),this.init()}init(){this.showFormBtn.addEventListener("click",(()=>this.showForm())),this.closeBtn.addEventListener("click",(()=>this.closeForm())),this.contactForm.addEventListener("submit",(t=>this.submitForm(t)))}showForm(){this.showFormBtn.style.display="none",this.formContainer.classList.add("visible")}closeForm(){this.formContainer.classList.remove("visible"),setTimeout((()=>{this.showFormBtn.style.display="block"}),100)}submitForm(t){t.preventDefault(),this.closeForm()}}class e{constructor(){this.collapseBtn=document.querySelector(".collapse__btn"),this.showDescription=document.querySelector(".show__description"),this.copyBtn=document.querySelector(".copy__text"),this.textToCopy=document.querySelector(".text").textContent,this.init()}init(){this.collapseBtn.addEventListener("click",(()=>this.toggleDescription())),this.copyBtn.addEventListener("click",(t=>this.copyText(t)))}toggleDescription(){this.showDescription.classList.toggle("show")}copyText(t){t.preventDefault(),navigator.clipboard.writeText(this.textToCopy).then((()=>console.log("Текст скопирован в буфер!"))).catch((t=>console.error(`Ошибка копирования текста: ${t}`)))}}document.addEventListener("DOMContentLoaded",(()=>{new e,new t}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQWUsTUFBTUEsRUFDbkJDLFdBQUFBLEdBQ0VDLEtBQUtDLFlBQWNDLFNBQVNDLGNBQWMsbUJBQzFDSCxLQUFLSSxjQUFnQkYsU0FBU0MsY0FBYyxvQkFDNUNILEtBQUtLLFlBQWNILFNBQVNDLGNBQWMsa0JBQzFDSCxLQUFLTSxTQUFXSixTQUFTQyxjQUFjLGVBRXZDSCxLQUFLTyxNQUNQLENBRUFBLElBQUFBLEdBQ0VQLEtBQUtDLFlBQVlPLGlCQUFpQixTQUFTLElBQU1SLEtBQUtTLGFBQ3REVCxLQUFLTSxTQUFTRSxpQkFBaUIsU0FBUyxJQUFNUixLQUFLVSxjQUNuRFYsS0FBS0ssWUFBWUcsaUJBQWlCLFVBQVdHLEdBQU1YLEtBQUtZLFdBQVdELElBQ3JFLENBRUFGLFFBQUFBLEdBQ0VULEtBQUtDLFlBQVlZLE1BQU1DLFFBQVUsT0FDakNkLEtBQUtJLGNBQWNXLFVBQVVDLElBQUksVUFDbkMsQ0FFQU4sU0FBQUEsR0FDRVYsS0FBS0ksY0FBY1csVUFBVUUsT0FBTyxXQUNwQ0MsWUFBVyxLQUNUbEIsS0FBS0MsWUFBWVksTUFBTUMsUUFBVSxPQUFPLEdBQ3ZDLElBQ0wsQ0FFQUYsVUFBQUEsQ0FBV0QsR0FDVEEsRUFBRVEsaUJBQ0ZuQixLQUFLVSxXQUNQLEVDL0JhLE1BQU1VLEVBQ25CckIsV0FBQUEsR0FDRUMsS0FBS3FCLFlBQWNuQixTQUFTQyxjQUFjLGtCQUMxQ0gsS0FBS3NCLGdCQUFrQnBCLFNBQVNDLGNBQWMsc0JBQzlDSCxLQUFLdUIsUUFBVXJCLFNBQVNDLGNBQWMsZUFDdENILEtBQUt3QixXQUFhdEIsU0FBU0MsY0FBYyxTQUFTc0IsWUFDbER6QixLQUFLTyxNQUNQLENBRUFBLElBQUFBLEdBQ0VQLEtBQUtxQixZQUFZYixpQkFBaUIsU0FBUyxJQUFNUixLQUFLMEIsc0JBQ3REMUIsS0FBS3VCLFFBQVFmLGlCQUFpQixTQUFVbUIsR0FBVTNCLEtBQUs0QixTQUFTRCxJQUNsRSxDQUVBRCxpQkFBQUEsR0FDRTFCLEtBQUtzQixnQkFBZ0JQLFVBQVVjLE9BQU8sT0FDeEMsQ0FFQUQsUUFBQUEsQ0FBU0QsR0FDUEEsRUFBTVIsaUJBQ05XLFVBQVVDLFVBQVVDLFVBQVVoQyxLQUFLd0IsWUFDaENTLE1BQUssSUFBTUMsUUFBUUMsSUFBSSwrQkFDdkJDLE9BQU9DLEdBQVFILFFBQVFJLE1BQU0sOEJBQThCRCxNQUNoRSxFQ25CRm5DLFNBQVNNLGlCQUFpQixvQkFBb0IsS0FDNUMsSUFBSVksRUFDSixJQUFJdEIsQ0FBb0IsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2FuaW1hdGlvbnMtY3NzLy4vc3JjL2pzL0NhbGxiYWNrQ2hhdFdpZGdldC5qcyIsIndlYnBhY2s6Ly9hbmltYXRpb25zLWNzcy8uL3NyYy9qcy9Db2xsYXBzZVdpZGdldC5qcyIsIndlYnBhY2s6Ly9hbmltYXRpb25zLWNzcy8uL3NyYy9qcy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbGJhY2tDaGF0V2lkZ2V0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zaG93Rm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93X19mb3JtLWJ0bicpO1xuICAgIHRoaXMuZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19jb250YWluZXInKTtcbiAgICB0aGlzLmNvbnRhY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RfX2Zvcm0nKTtcbiAgICB0aGlzLmNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlX19idG4nKTtcblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnNob3dGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5zaG93Rm9ybSgpKTtcbiAgICB0aGlzLmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5jbG9zZUZvcm0oKSk7XG4gICAgdGhpcy5jb250YWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4gdGhpcy5zdWJtaXRGb3JtKGUpKTtcbiAgfVxuXG4gIHNob3dGb3JtKCkge1xuICAgIHRoaXMuc2hvd0Zvcm1CdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLmZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICB9XG5cbiAgY2xvc2VGb3JtKCkge1xuICAgIHRoaXMuZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNob3dGb3JtQnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBzdWJtaXRGb3JtKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jbG9zZUZvcm0oKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGFwc2VXaWRnZXQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbGxhcHNlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxhcHNlX19idG4nKTtcbiAgICB0aGlzLnNob3dEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93X19kZXNjcmlwdGlvbicpO1xuICAgIHRoaXMuY29weUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3B5X190ZXh0Jyk7XG4gICAgdGhpcy50ZXh0VG9Db3B5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQnKS50ZXh0Q29udGVudDtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5jb2xsYXBzZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMudG9nZ2xlRGVzY3JpcHRpb24oKSk7XG4gICAgdGhpcy5jb3B5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB0aGlzLmNvcHlUZXh0KGV2ZW50KSk7XG4gIH1cblxuICB0b2dnbGVEZXNjcmlwdGlvbigpIHtcbiAgICB0aGlzLnNob3dEZXNjcmlwdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gIH1cblxuICBjb3B5VGV4dChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGhpcy50ZXh0VG9Db3B5KVxuICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ9Ci0LXQutGB0YIg0YHQutC+0L/QuNGA0L7QstCw0L0g0LIg0LHRg9GE0LXRgCEnKSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGDQntGI0LjQsdC60LAg0LrQvtC/0LjRgNC+0LLQsNC90LjRjyDRgtC10LrRgdGC0LA6ICR7ZXJyfWApKTtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tbmV3ICovXG5pbXBvcnQgQ2FsbGJhY2tDaGF0V2lkZ2V0IGZyb20gJy4vQ2FsbGJhY2tDaGF0V2lkZ2V0JztcbmltcG9ydCBDb2xsYXBzZVdpZGdldCBmcm9tICcuL0NvbGxhcHNlV2lkZ2V0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgbmV3IENvbGxhcHNlV2lkZ2V0KCk7XG4gIG5ldyBDYWxsYmFja0NoYXRXaWRnZXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIkNhbGxiYWNrQ2hhdFdpZGdldCIsImNvbnN0cnVjdG9yIiwidGhpcyIsInNob3dGb3JtQnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZm9ybUNvbnRhaW5lciIsImNvbnRhY3RGb3JtIiwiY2xvc2VCdG4iLCJpbml0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dGb3JtIiwiY2xvc2VGb3JtIiwiZSIsInN1Ym1pdEZvcm0iLCJzdHlsZSIsImRpc3BsYXkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzZXRUaW1lb3V0IiwicHJldmVudERlZmF1bHQiLCJDb2xsYXBzZVdpZGdldCIsImNvbGxhcHNlQnRuIiwic2hvd0Rlc2NyaXB0aW9uIiwiY29weUJ0biIsInRleHRUb0NvcHkiLCJ0ZXh0Q29udGVudCIsInRvZ2dsZURlc2NyaXB0aW9uIiwiZXZlbnQiLCJjb3B5VGV4dCIsInRvZ2dsZSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=