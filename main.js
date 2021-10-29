(()=>{"use strict";function e(e){e.classList.contains("bg-gray-200")&&e.classList.remove("bg-gray-200"),e.classList.contains("bg-white")||e.classList.add("bg-white")}function t(e){e.classList.contains("bg-white")&&e.classList.remove("bg-white"),e.classList.contains("bg-gray-200")||e.classList.add("bg-gray-200")}const a=function(){const e=document.createElement("div");e.classList.add("row");const t=document.createElement("div");t.classList.add("col-12");const a=document.createElement("img");a.src="./assets/img/IMG_0818.JPG",a.classList.add("width-100"),t.appendChild(a),e.appendChild(t);const n=document.createElement("div");n.classList.add("row");const d=document.createElement("div");d.classList.add("col-12");const s=document.createElement("p");s.classList.add("text-justify"),s.innerHTML="Are you tired of eating food that tastes good? Are you sick of maintaining your foodie image on instagram? Are you running out of money? Reset your palate, regain time lost on social media, and watch your wallet grow at the Dirtbag Diner. The food here is SO cheap we guarantee that you couldn't spend less by going to the grocery store or the dollar menu.",d.appendChild(s),n.appendChild(d);const i=document.createElement("div");return i.appendChild(n),i.appendChild(e),i},n=function(e,t,a){const n=document.createElement("div");n.classList.add("col-12","col-6_lg");const d=document.createElement("div");d.classList.add("height-5","height-6_sm");const s=document.createElement("img");s.src=e,s.classList.add("width-100","height-100","object-fit-cover"),d.appendChild(s);const i=document.createElement("p");i.innerHTML=t;const o=document.createElement("p");return o.classList.add("text-xs","text-gray-600","mb-4"),o.innerHTML=a,n.appendChild(d),n.appendChild(i),n.appendChild(o),n},d=function(e,t){const a=document.createElement("div");a.classList.add("col-12","col-4_lg");const n=document.createElement("div");n.classList.add("height-5","height-6_sm");const d=document.createElement("img");d.src=e,d.classList.add("width-100","height-100","object-fit-cover"),n.appendChild(d);const s=document.createElement("p");return s.innerHTML=t,s.classList.add("text-center","mb-4","mb-0_lg"),a.appendChild(n),a.appendChild(s),a},s=document.createElement("div");s.classList.add("container","max-width-8","m-auto"),document.querySelector("#content").appendChild(s),s.appendChild(function(){const e=document.createElement("div");e.classList.add("row");const t=document.createElement("div");t.classList.add("col-12");const a=document.createElement("p");return a.classList.add("text-center","h2","h1_md"),a.innerHTML="The Dirtbag Diner",t.appendChild(a),e.appendChild(t),e}()),s.appendChild(function(){const e=document.createElement("div");e.classList.add("row","p-0");const t=document.createElement("div");t.classList.add("col-12","display-flex","justify-center");const a=document.createElement("input");a.setAttribute("type","button"),a.setAttribute("value","about"),a.setAttribute("id","about"),a.classList.add("border-none","border-top","border-right","border-left","border-color-gray-500","bg-white","mr-2","p-3");const n=document.createElement("input");n.setAttribute("type","button"),n.setAttribute("value","menu"),n.setAttribute("id","menu"),n.classList.add("border-none","border-top","border-right","border-left","border-color-gray-500","bg-gray-200","bg-white","mr-2","p-3");const d=document.createElement("input");return d.setAttribute("type","button"),d.setAttribute("value","contact"),d.setAttribute("id","contact"),d.classList.add("border-none","border-top","border-right","border-left","border-color-gray-500","bg-gray-200","bg-white","mr-2","p-3"),t.appendChild(a),t.appendChild(n),t.appendChild(d),e.appendChild(t),e}());const i=document.createElement("div");i.classList.add("mb-5","bg-white","p-2","p-4_md","border-radius-3","shadow-lg"),i.setAttribute("id","#page"),s.appendChild(i),i.appendChild(a()),document.querySelector("#menu").addEventListener("click",(()=>{for(;i.firstChild;)i.removeChild(i.firstChild);i.appendChild(function(){const e=document.createElement("div");e.classList.add("row");const t=n("./assets/img/ramen-noodles.JPG","Ramen Noodles","Hot water and the .25 cent pack of noodles."),a=n("./assets/img/tortilla-pbj.JPG","PB&J Tortilla","Name says it all."),d=n("./assets/img/stirfry-and-beer.JPG","Stirfry and Beer","Cooked on a $5 Walmart wok. No telling what the stirfry ingredients will be from day to day. The beer is always cold and cheap though."),s=n("./assets/img/scalloped-potatoes.JPG","Scalloped Potatoes","The instant kind, from the box."),i=n("./assets/img/refried-beans.JPG","Refried Beans","The fanciest of all meals here - these are made in an instant pot, frozen, then thawed out when you want em."),o=n("./assets/img/ratatouille.JPG","Ratatouille","Can only find this stuff in France - hasn't caught on in the States yet."),r=n("./assets/img/peas-carrots-fish.JPG","Peas and Carrots with Canned Fish","When you think you need more vitamins in your life."),c=n("./assets/img/oatmeal-and-coffee.JPG","Oatmeal and Coffee","Our breakfast every morning."),l=n("./assets/img/nutella.JPG","Jar of Nutella","This goes great in tortillas when you get tired of PB&J."),h=n("./assets/img/noodles.JPG","Noodles","Can't remember what goes in here besides noodles."),m=n("./assets/img/IMG_1015.JPG","Canned Whole Chicken","When you get tired of the rotisserie chickens from the grocery store."),u=n("./assets/img/fresh-vegetables.JPG","Fresh Vegetables","Best raw or boiled."),p=n("./assets/img/dehydrated-refried-beans.JPG","Dehyrated Refried Beans","What are you gonna eat when you run out of water?"),g=n("./assets/img/cheesecake.JPG","Frozen Aisle Cheesecake","This is best served half thawed - that way it's kinda like ice cream and kinda like cheesecake at the same time."),b=n("./assets/img/canned-tamales.JPG","Canned Tamales","A delicious mess."),f=n("./assets/img/canned-hamburger.JPG","Canned Hamburger","When you're far from civilization but need that burger fix."),y=n("./assets/img/baguette.JPG","Bread","This is about all that's cheap in Europe."),C=n("./assets/img/avocado-and-fish.JPG","Avocado and Canned Fish","If you mash it up real good it makes a good 'pate'.");e.appendChild(t),e.appendChild(a),e.appendChild(d),e.appendChild(s),e.appendChild(i),e.appendChild(o),e.appendChild(r),e.appendChild(c),e.appendChild(l),e.appendChild(h),e.appendChild(m),e.appendChild(u),e.appendChild(p),e.appendChild(g),e.appendChild(b),e.appendChild(f),e.appendChild(y),e.appendChild(C);const v=document.createElement("div");return v.appendChild(e),v}()),e(document.querySelector("#menu")),t(document.querySelector("#about")),t(document.querySelector("#contact"))})),document.querySelector("#about").addEventListener("click",(()=>{for(;i.firstChild;)i.removeChild(i.firstChild);i.appendChild(a()),e(document.querySelector("#about")),t(document.querySelector("#menu")),t(document.querySelector("#contact"))})),document.querySelector("#contact").addEventListener("click",(()=>{for(;i.firstChild;)i.removeChild(i.firstChild);i.appendChild(function(){const e=document.createElement("div");e.classList.add("row","justify-center");const t=document.createElement("div");t.classList.add("col-12");const a=document.createElement("p");a.classList.add("text-justify"),a.innerHTML="The Dirtbag Diner has no permanent location. You can find us in an old van with 'Dirtbag Diner' spray painted on the side.  We are usually parked in Walmart Parking lots or off of forest service roads. We would provide more information about the van but the truth is the vans we drive are so old and decrepit that they don't last long. We have no cellphones and don't exist on social media. Below are the founding members who live full time in the Dirtbag Diner van.",t.appendChild(a),e.appendChild(t);const n=document.createElement("div");n.classList.add("row");const s=d("../dist/assets/img/your-boy-1.JPG","Your Boy Alex"),i=d("../dist/assets/img/your-boy-2.JPG","Your Boy Kit"),o=d("../dist/assets/img/your-boy-3.JPG","Your Boy Eric");n.appendChild(s),n.appendChild(i),n.appendChild(o);const r=document.createElement("div");return r.appendChild(e),r.appendChild(n),r}()),e(document.querySelector("#contact")),t(document.querySelector("#about")),t(document.querySelector("#menu"))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQU9oQyxTQUFTQyxjQUFjLE9BQ3BDK0IsRUFBS3RDLFVBQVVHLElBQUksVUFDbkIsTUFBTXNCLEVBQUluQixTQUFTQyxjQUFjLEtBQ2pDa0IsRUFBRXpCLFVBQVVHLElBQUksZ0JBQ2hCc0IsRUFBRVYsVUFBWSxxZEFJZHVCLEVBQUszQixZQUFZYyxHQUNqQitCLEVBQUs3QyxZQUFZMkIsR0FHakIsTUFBTW1CLEVBQU9uRCxTQUFTQyxjQUFjLE9BQ3BDa0QsRUFBS3pELFVBQVVHLElBQUksT0FHbkIsTUFBTW9DLEVBQU8sRUFBWSxvQ0FBcUMsaUJBQ3hEQyxFQUFPLEVBQVksb0NBQXFDLGdCQUN4REMsRUFBTyxFQUFZLG9DQUFxQyxpQkFHOURnQixFQUFLOUMsWUFBWTRCLEdBQ2pCa0IsRUFBSzlDLFlBQVk2QixHQUNqQmlCLEVBQUs5QyxZQUFZOEIsR0FHakIsTUFBTXpCLEVBQU1WLFNBQVNDLGNBQWMsT0FJbkMsT0FIQVMsRUFBSUwsWUFBWTZDLEdBQ2hCeEMsRUFBSUwsWUFBWThDLEdBRVR6QyxFSGdDVSxJQUdqQmxCLEVBQWFRLFNBQVNxQixjQUFjLGFBR3BDdkIsRUFBZUUsU0FBU3FCLGNBQWMsV0FDdEN2QixFQUFlRSxTQUFTcUIsY0FBYyxjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3RhYnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LWl0ZW0tY2FyZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC1jYXJkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGluZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB0YWJzKCl7XG4gIC8vY3JlYXRlIHRhYiBjb250YWluZXJcbiAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIixcInAtMFwiKTtcblxuICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb2wuY2xhc3NMaXN0LmFkZChcImNvbC0xMlwiLFwiZGlzcGxheS1mbGV4XCIsXCJqdXN0aWZ5LWNlbnRlclwiKTtcblxuICBjb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgYWJvdXRCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpO1xuICBhYm91dEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiYWJvdXRcIik7XG4gIGFib3V0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsXCJhYm91dFwiKTtcbiAgYWJvdXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImJvcmRlci1ub25lXCIsXCJib3JkZXItdG9wXCIsXCJib3JkZXItcmlnaHRcIixcImJvcmRlci1sZWZ0XCIsXCJib3JkZXItY29sb3ItZ3JheS01MDBcIixcImJnLXdoaXRlXCIsXCJtci0yXCIsXCJwLTNcIik7XG5cbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbWVudUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIik7XG4gIG1lbnVCdXR0b24uc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIm1lbnVcIik7XG4gIG1lbnVCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIixcIm1lbnVcIik7XG4gIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcImJvcmRlci1ub25lXCIsXCJib3JkZXItdG9wXCIsXCJib3JkZXItcmlnaHRcIixcImJvcmRlci1sZWZ0XCIsXCJib3JkZXItY29sb3ItZ3JheS01MDBcIixcImJnLWdyYXktMjAwXCIsXCJiZy13aGl0ZVwiLFwibXItMlwiLFwicC0zXCIpO1xuXG4gIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7IFxuICBjb250YWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKTtcbiAgY29udGFjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiY29udGFjdFwiKTtcbiAgY29udGFjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiY29udGFjdFwiKTtcbiAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYm9yZGVyLW5vbmVcIixcImJvcmRlci10b3BcIixcImJvcmRlci1yaWdodFwiLFwiYm9yZGVyLWxlZnRcIixcImJvcmRlci1jb2xvci1ncmF5LTUwMFwiLFwiYmctZ3JheS0yMDBcIixcImJnLXdoaXRlXCIsXCJtci0yXCIsXCJwLTNcIik7XG5cbiAgY29sLmFwcGVuZENoaWxkKGFib3V0QnV0dG9uKTtcbiAgY29sLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICBjb2wuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG4gIHJvdy5hcHBlbmRDaGlsZChjb2wpO1xuXG4gIHJldHVybiByb3c7XG59XG5cbmZ1bmN0aW9uIHNldFRhYkFjdGl2ZSh0YWJFbGVtZW50KXtcbiAgLy9yZW1vdmUgZGFyayBiYWNrZ3JvdW5kIGlmIGl0IGV4aXN0c1xuICBpZiAodGFiRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJiZy1ncmF5LTIwMFwiKSl7XG4gICAgdGFiRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYmctZ3JheS0yMDBcIik7XG4gIH1cblxuICAvL3NldCB3aGl0ZSBiYWNrZ3JvdW5kIGlmIGl0IGRvZXNudCBleGlzdFxuICBpZiAoIXRhYkVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmctd2hpdGVcIikpe1xuICAgIHRhYkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImJnLXdoaXRlXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFRhYkluYWN0aXZlKHRhYkVsZW1lbnQpe1xuICAvL3JlbW92ZSB3aGl0ZSBiYWNrZ3JvdW5kIGlmIGl0IGV4aXN0c1xuICBpZiAodGFiRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJiZy13aGl0ZVwiKSl7XG4gICAgdGFiRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYmctd2hpdGVcIik7XG4gIH1cblxuICAvL3NldCBkYXJrIGJhY2tncm91bmQgaWYgaXQgZG9lc24ndCBleGlzdFxuICBpZiAoIXRhYkVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmctZ3JheS0yMDBcIikpe1xuICAgIHRhYkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImJnLWdyYXktMjAwXCIpO1xuICB9XG59XG5cbmV4cG9ydCB7IHRhYnMsIHNldFRhYkFjdGl2ZSwgc2V0VGFiSW5hY3RpdmUgfTsiLCJmdW5jdGlvbiBhYm91dCgpe1xuICAvL2NyZWF0ZSBpbWFnZSBjb250YWluZXJcbiAgY29uc3QgaW1hZ2VSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbWFnZVJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuXG4gIGNvbnN0IGltYWdlQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW1hZ2VDb2wuY2xhc3NMaXN0LmFkZChcImNvbC0xMlwiKTtcblxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcuc3JjID0gJy4vYXNzZXRzL2ltZy9JTUdfMDgxOC5KUEcnO1xuICBpbWcuY2xhc3NMaXN0LmFkZChcIndpZHRoLTEwMFwiKTtcblxuICBpbWFnZUNvbC5hcHBlbmRDaGlsZChpbWcpO1xuICBpbWFnZVJvdy5hcHBlbmRDaGlsZChpbWFnZUNvbCk7XG5cbiAgLy9jcmVhdGUgdGV4dCBjb250YWluZXJcbiAgY29uc3QgdGV4dFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRleHRSb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcblxuICBjb25zdCB0ZXh0Q29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGV4dENvbC5jbGFzc0xpc3QuYWRkKFwiY29sLTEyXCIpO1xuXG4gIGNvbnN0IHRleHRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRleHRQLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWp1c3RpZnlcIik7XG4gIHRleHRQLmlubmVySFRNTCA9IFwiQXJlIHlvdSB0aXJlZCBvZiBlYXRpbmcgZm9vZCB0aGF0IHRhc3RlcyBnb29kPyBBcmUgeW91IHNpY2sgb2YgbWFpbnRhaW5pbmcgeW91ciBmb29kaWUgaW1hZ2Ugb24gaW5zdGFncmFtPyBBcmUgeW91IHJ1bm5pbmcgb3V0IG9mIG1vbmV5PyBSZXNldCB5b3VyIHBhbGF0ZSwgcmVnYWluIHRpbWUgbG9zdCBvbiBzb2NpYWwgbWVkaWEsIGFuZCB3YXRjaCB5b3VyIHdhbGxldCBncm93IGF0IHRoZSBEaXJ0YmFnIERpbmVyLiBUaGUgZm9vZCBoZXJlIGlzIFNPIGNoZWFwIHdlIGd1YXJhbnRlZSB0aGF0IHlvdSBjb3VsZG4ndCBzcGVuZCBsZXNzIGJ5IGdvaW5nIHRvIHRoZSBncm9jZXJ5IHN0b3JlIG9yIHRoZSBkb2xsYXIgbWVudS5cIjtcblxuICB0ZXh0Q29sLmFwcGVuZENoaWxkKHRleHRQKTtcbiAgdGV4dFJvdy5hcHBlbmRDaGlsZCh0ZXh0Q29sKTtcblxuICAvL3N0aWNrIGNvbnRhaW5lcnMgaW50byBkaXZcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmFwcGVuZENoaWxkKHRleHRSb3cpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaW1hZ2VSb3cpO1xuXG4gIHJldHVybiBkaXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0O1xuXG5cbiIsImZ1bmN0aW9uIG1lbnVJdGVtQ2FyZChpbWFnZVBhdGgsIHRpdGxlLCBkZXNjcmlwdGlvbil7XG4gIC8vcmV0dXJuIGEgbWVudSBpdGVtICdjYXJkJ1xuICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb2wuY2xhc3NMaXN0LmFkZChcImNvbC0xMlwiLFwiY29sLTZfbGdcIilcblxuICBjb25zdCBpbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbWdEaXYuY2xhc3NMaXN0LmFkZChcImhlaWdodC01XCIsXCJoZWlnaHQtNl9zbVwiKTtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1nLnNyYyA9IGltYWdlUGF0aDtcbiAgaW1nLmNsYXNzTGlzdC5hZGQoXCJ3aWR0aC0xMDBcIixcImhlaWdodC0xMDBcIixcIm9iamVjdC1maXQtY292ZXJcIik7XG4gIGltZ0Rpdi5hcHBlbmRDaGlsZChpbWcpO1xuXG4gIGNvbnN0IHBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwVGl0bGUuaW5uZXJIVE1MID0gdGl0bGU7XG5cbiAgY29uc3QgcERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidGV4dC14c1wiLFwidGV4dC1ncmF5LTYwMFwiLFwibWItNFwiKTtcbiAgcERlc2NyaXB0aW9uLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uO1xuXG4gIGNvbC5hcHBlbmRDaGlsZChpbWdEaXYpO1xuICBjb2wuYXBwZW5kQ2hpbGQocFRpdGxlKTtcbiAgY29sLmFwcGVuZENoaWxkKHBEZXNjcmlwdGlvbik7XG4gIFxuICByZXR1cm4gY29sO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW51SXRlbUNhcmQ7IiwiZnVuY3Rpb24gY29udGFjdENhcmQoaW1hZ2VQYXRoLCBuYW1lKXtcbiAgY29uc3QgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29sLmNsYXNzTGlzdC5hZGQoXCJjb2wtMTJcIixcImNvbC00X2xnXCIpO1xuXG4gIGNvbnN0IGltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGltZ0Rpdi5jbGFzc0xpc3QuYWRkKFwiaGVpZ2h0LTVcIixcImhlaWdodC02X3NtXCIpO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcuc3JjID0gaW1hZ2VQYXRoO1xuICBpbWcuY2xhc3NMaXN0LmFkZChcIndpZHRoLTEwMFwiLFwiaGVpZ2h0LTEwMFwiLFwib2JqZWN0LWZpdC1jb3ZlclwiKTtcbiAgaW1nRGl2LmFwcGVuZENoaWxkKGltZyk7XG5cbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwLmlubmVySFRNTCA9IG5hbWU7XG4gIHAuY2xhc3NMaXN0LmFkZChcInRleHQtY2VudGVyXCIsXCJtYi00XCIsXCJtYi0wX2xnXCIpO1xuXG4gIC8vc3RpY2sgaW1hZ2VEaXYgYW5kIHAgZWxlbWVudHMgaW50byBjb2xcbiAgY29sLmFwcGVuZENoaWxkKGltZ0Rpdik7XG4gIGNvbC5hcHBlbmRDaGlsZChwKTtcblxuICByZXR1cm4gY29sO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0Q2FyZDsiLCJpbXBvcnQgaGVhZGluZyBmcm9tIFwiLi9oZWFkaW5nLmpzXCI7XG5pbXBvcnQgeyB0YWJzLCBzZXRUYWJBY3RpdmUsIHNldFRhYkluYWN0aXZlIH0gZnJvbSBcIi4vdGFicy5qc1wiO1xuaW1wb3J0IGFib3V0IGZyb20gXCIuL2Fib3V0LmpzXCI7XG5pbXBvcnQgbWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgY29udGFjdCBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5cbi8vYWRkIG1haW4gY29udGFpbmVyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIixcIm1heC13aWR0aC04XCIsXCJtLWF1dG9cIik7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuLy9hZGQgaGVhZGluZ1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcoKSk7XG5cbi8vYWRkIHRhYnNcbmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJzKCkpO1xuXG4vL2FkZCBwYWdlIGNvbnRhaW5lclxuY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wYWdlLmNsYXNzTGlzdC5hZGQoXCJtYi01XCIsXCJiZy13aGl0ZVwiLFwicC0yXCIsXCJwLTRfbWRcIixcImJvcmRlci1yYWRpdXMtM1wiLFwic2hhZG93LWxnXCIpO1xucGFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiI3BhZ2VcIik7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZSk7XG5cbi8vYWRkIGFib3V0XG5wYWdlLmFwcGVuZENoaWxkKGFib3V0KCkpO1xuXG4vL2FkZCBldmVudCBsaXN0ZW5lcnNcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAvL2NsZWFyIHRoZSBjdXJyZW50IHBhZ2VcbiAgd2hpbGUocGFnZS5maXJzdENoaWxkKXtcbiAgICBwYWdlLnJlbW92ZUNoaWxkKHBhZ2UuZmlyc3RDaGlsZCk7XG4gIH1cblxuICAvL3JlbmRlciB0aGUgbWVudSBwYWdlXG4gIHBhZ2UuYXBwZW5kQ2hpbGQobWVudSgpKTtcblxuICAvL2NoYW5nZSB0aGUgbWVudSB0YWIgdG8gYWN0aXZlXG4gIHNldFRhYkFjdGl2ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIikpO1xuXG4gIC8vY2hhbmdlIHRoZSBhYm91dC9jb250YWN0IHRhYnMgdG8gaW5hY3RpdmVcbiAgc2V0VGFiSW5hY3RpdmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhYm91dFwiKSk7XG4gIHNldFRhYkluYWN0aXZlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdFwiKSk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhYm91dFwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAvL2NsZWFyIHRoZSBjdXJyZW50IHBhZ2VcbiAgd2hpbGUocGFnZS5maXJzdENoaWxkKXtcbiAgICBwYWdlLnJlbW92ZUNoaWxkKHBhZ2UuZmlyc3RDaGlsZCk7XG4gIH1cblxuICAvL3JlbmRlciB0aGUgYWJvdXQgcGFnZVxuICBwYWdlLmFwcGVuZENoaWxkKGFib3V0KCkpO1xuXG4gIC8vY2hhbmdlIHRoZSBhYm91dCB0YWIgdG8gYWN0aXZlXG4gIHNldFRhYkFjdGl2ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Fib3V0XCIpKTtcblxuICAvL2NoYW5nZSB0aGUgbWVudS9jb250YWN0IHRhYnMgdG8gaW5hY3RpdmVcbiAgc2V0VGFiSW5hY3RpdmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpKTtcbiAgc2V0VGFiSW5hY3RpdmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0XCIpKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgLy9jbGVhciB0aGUgY3VycmVudCBwYWdlXG4gIHdoaWxlKHBhZ2UuZmlyc3RDaGlsZCl7XG4gICAgcGFnZS5yZW1vdmVDaGlsZChwYWdlLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgLy9yZW5kZXIgdGhlIGNvbnRhY3QgcGFnZVxuICBwYWdlLmFwcGVuZENoaWxkKGNvbnRhY3QoKSk7XG5cbiAgLy9jaGFuZ2UgdGhlIGNvbnRhY3QgdGFiIHRvIGFjdGl2ZVxuICBzZXRUYWJBY3RpdmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0XCIpKTtcblxuICAvL2NoYW5nZSB0aGUgYWJvdXQvbWVudSB0YWJzIHRvIGluYWN0aXZlXG4gIHNldFRhYkluYWN0aXZlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWJvdXRcIikpO1xuICBzZXRUYWJJbmFjdGl2ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIikpO1xufSk7XG5cbiIsImZ1bmN0aW9uIGhlYWRpbmcoKXtcbiAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gIFxuICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb2wuY2xhc3NMaXN0LmFkZChcImNvbC0xMlwiKTtcbiAgXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcC5jbGFzc0xpc3QuYWRkKFwidGV4dC1jZW50ZXJcIixcImgyXCIsXCJoMV9tZFwiKTtcbiAgcC5pbm5lckhUTUwgPSBcIlRoZSBEaXJ0YmFnIERpbmVyXCI7XG4gIFxuICBjb2wuYXBwZW5kQ2hpbGQocCk7XG4gIHJvdy5hcHBlbmRDaGlsZChjb2wpO1xuXG4gIHJldHVybiByb3c7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRpbmc7XG5cblxuXG5cbiIsImltcG9ydCBtZW51SXRlbUNhcmQgZnJvbSBcIi4vbWVudS1pdGVtLWNhcmQuanNcIjtcblxuZnVuY3Rpb24gbWVudSgpe1xuICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcblxuICBjb25zdCBjb2wxID0gbWVudUl0ZW1DYXJkKFwiLi9hc3NldHMvaW1nL3JhbWVuLW5vb2RsZXMuSlBHXCIsIFwiUmFtZW4gTm9vZGxlc1wiLCBcIkhvdCB3YXRlciBhbmQgdGhlIC4yNSBjZW50IHBhY2sgb2Ygbm9vZGxlcy5cIik7XG4gIGNvbnN0IGNvbDIgPSBtZW51SXRlbUNhcmQoXCIuL2Fzc2V0cy9pbWcvdG9ydGlsbGEtcGJqLkpQR1wiLCBcIlBCJkogVG9ydGlsbGFcIixcIk5hbWUgc2F5cyBpdCBhbGwuXCIpO1xuICBjb25zdCBjb2wzID0gbWVudUl0ZW1DYXJkKFwiLi9hc3NldHMvaW1nL3N0aXJmcnktYW5kLWJlZXIuSlBHXCIsIFwiU3RpcmZyeSBhbmQgQmVlclwiLFwiQ29va2VkIG9uIGEgJDUgV2FsbWFydCB3b2suIE5vIHRlbGxpbmcgd2hhdCB0aGUgc3RpcmZyeSBpbmdyZWRpZW50cyB3aWxsIGJlIGZyb20gZGF5IHRvIGRheS4gVGhlIGJlZXIgaXMgYWx3YXlzIGNvbGQgYW5kIGNoZWFwIHRob3VnaC5cIik7XG4gIGNvbnN0IGNvbDQgPSBtZW51SXRlbUNhcmQoXCIuL2Fzc2V0cy9pbWcvc2NhbGxvcGVkLXBvdGF0b2VzLkpQR1wiLCBcIlNjYWxsb3BlZCBQb3RhdG9lc1wiLFwiVGhlIGluc3RhbnQga2luZCwgZnJvbSB0aGUgYm94LlwiKTtcbiAgY29uc3QgY29sNSA9IG1lbnVJdGVtQ2FyZChcIi4vYXNzZXRzL2ltZy9yZWZyaWVkLWJlYW5zLkpQR1wiLCBcIlJlZnJpZWQgQmVhbnNcIixcIlRoZSBmYW5jaWVzdCBvZiBhbGwgbWVhbHMgaGVyZSAtIHRoZXNlIGFyZSBtYWRlIGluIGFuIGluc3RhbnQgcG90LCBmcm96ZW4sIHRoZW4gdGhhd2VkIG91dCB3aGVuIHlvdSB3YW50IGVtLlwiKTtcbiAgY29uc3QgY29sNiA9IG1lbnVJdGVtQ2FyZChcIi4vYXNzZXRzL2ltZy9yYXRhdG91aWxsZS5KUEdcIiwgXCJSYXRhdG91aWxsZVwiLFwiQ2FuIG9ubHkgZmluZCB0aGlzIHN0dWZmIGluIEZyYW5jZSAtIGhhc24ndCBjYXVnaHQgb24gaW4gdGhlIFN0YXRlcyB5ZXQuXCIpO1xuICBjb25zdCBjb2w3ID0gbWVudUl0ZW1DYXJkKFwiLi9hc3NldHMvaW1nL3BlYXMtY2Fycm90cy1maXNoLkpQR1wiLCBcIlBlYXMgYW5kIENhcnJvdHMgd2l0aCBDYW5uZWQgRmlzaFwiLFwiV2hlbiB5b3UgdGhpbmsgeW91IG5lZWQgbW9yZSB2aXRhbWlucyBpbiB5b3VyIGxpZmUuXCIpO1xuICBjb25zdCBjb2w4ID0gbWVudUl0ZW1DYXJkKFwiLi9hc3NldHMvaW1nL29hdG1lYWwtYW5kLWNvZmZlZS5KUEdcIiwgXCJPYXRtZWFsIGFuZCBDb2ZmZWVcIixcIk91ciBicmVha2Zhc3QgZXZlcnkgbW9ybmluZy5cIik7XG4gIGNvbnN0IGNvbDEwID0gbWVudUl0ZW1DYXJkKFwiLi9hc3NldHMvaW1nL251dGVsbGEuSlBHXCIsIFwiSmFyIG9mIE51dGVsbGFcIixcIlRoaXMgZ29lcyBncmVhdCBpbiB0b3J0aWxsYXMgd2hlbiB5b3UgZ2V0IHRpcmVkIG9mIFBCJkouXCIpO1xuICBjb25zdCBjb2wxMSA9IG1lbnVJdGVtQ2FyZChcIi4vYXNzZXRzL2ltZy9ub29kbGVzLkpQR1wiLCBcIk5vb2RsZXNcIixcIkNhbid0IHJlbWVtYmVyIHdoYXQgZ29lcyBpbiBoZXJlIGJlc2lkZXMgbm9vZGxlcy5cIik7XG4gIGNvbnN0IGNvbDEyID0gbWVudUl0ZW1DYXJkKFwiLi9hc3NldHMvaW1nL0lNR18xMDE1LkpQR1wiLCBcIkNhbm5lZCBXaG9sZSBDaGlja2VuXCIsXCJXaGVuIHlvdSBnZXQgdGlyZWQgb2YgdGhlIHJvdGlzc2VyaWUgY2hpY2tlbnMgZnJvbSB0aGUgZ3JvY2VyeSBzdG9yZS5cIik7XG4gIGNvbnN0IGNvbDEzID0gbWVudUl0ZW1DYXJkKFwiLi9hc3NldHMvaW1nL2ZyZXNoLXZlZ2V0YWJsZXMuSlBHXCIsIFwiRnJlc2ggVmVnZXRhYmxlc1wiLFwiQmVzdCByYXcgb3IgYm9pbGVkLlwiKTtcbiAgY29uc3QgY29sMTQgPSBtZW51SXRlbUNhcmQoXCIuL2Fzc2V0cy9pbWcvZGVoeWRyYXRlZC1yZWZyaWVkLWJlYW5zLkpQR1wiLCBcIkRlaHlyYXRlZCBSZWZyaWVkIEJlYW5zXCIsXCJXaGF0IGFyZSB5b3UgZ29ubmEgZWF0IHdoZW4geW91IHJ1biBvdXQgb2Ygd2F0ZXI/XCIpO1xuICBjb25zdCBjb2wxNSA9IG1lbnVJdGVtQ2FyZChcIi4vYXNzZXRzL2ltZy9jaGVlc2VjYWtlLkpQR1wiLCBcIkZyb3plbiBBaXNsZSBDaGVlc2VjYWtlXCIsXCJUaGlzIGlzIGJlc3Qgc2VydmVkIGhhbGYgdGhhd2VkIC0gdGhhdCB3YXkgaXQncyBraW5kYSBsaWtlIGljZSBjcmVhbSBhbmQga2luZGEgbGlrZSBjaGVlc2VjYWtlIGF0IHRoZSBzYW1lIHRpbWUuXCIpO1xuICBjb25zdCBjb2wxNiA9IG1lbnVJdGVtQ2FyZChcIi4vYXNzZXRzL2ltZy9jYW5uZWQtdGFtYWxlcy5KUEdcIiwgXCJDYW5uZWQgVGFtYWxlc1wiLFwiQSBkZWxpY2lvdXMgbWVzcy5cIik7XG4gIGNvbnN0IGNvbDE3ID0gbWVudUl0ZW1DYXJkKFwiLi9hc3NldHMvaW1nL2Nhbm5lZC1oYW1idXJnZXIuSlBHXCIsIFwiQ2FubmVkIEhhbWJ1cmdlclwiLFwiV2hlbiB5b3UncmUgZmFyIGZyb20gY2l2aWxpemF0aW9uIGJ1dCBuZWVkIHRoYXQgYnVyZ2VyIGZpeC5cIik7XG4gIGNvbnN0IGNvbDE4ID0gbWVudUl0ZW1DYXJkKFwiLi9hc3NldHMvaW1nL2JhZ3VldHRlLkpQR1wiLCBcIkJyZWFkXCIsXCJUaGlzIGlzIGFib3V0IGFsbCB0aGF0J3MgY2hlYXAgaW4gRXVyb3BlLlwiKTtcbiAgY29uc3QgY29sMTkgPSBtZW51SXRlbUNhcmQoXCIuL2Fzc2V0cy9pbWcvYXZvY2Fkby1hbmQtZmlzaC5KUEdcIiwgXCJBdm9jYWRvIGFuZCBDYW5uZWQgRmlzaFwiLFwiSWYgeW91IG1hc2ggaXQgdXAgcmVhbCBnb29kIGl0IG1ha2VzIGEgZ29vZCAncGF0ZScuXCIpO1xuICBcbiAgcm93LmFwcGVuZENoaWxkKGNvbDEpO1xuICByb3cuYXBwZW5kQ2hpbGQoY29sMik7XG4gIHJvdy5hcHBlbmRDaGlsZChjb2wzKTtcbiAgcm93LmFwcGVuZENoaWxkKGNvbDQpO1xuICByb3cuYXBwZW5kQ2hpbGQoY29sNSk7XG4gIHJvdy5hcHBlbmRDaGlsZChjb2w2KTtcbiAgcm93LmFwcGVuZENoaWxkKGNvbDcpO1xuICByb3cuYXBwZW5kQ2hpbGQoY29sOCk7XG4gIHJvdy5hcHBlbmRDaGlsZChjb2wxMCk7XG4gIHJvdy5hcHBlbmRDaGlsZChjb2wxMSk7XG4gIHJvdy5hcHBlbmRDaGlsZChjb2wxMik7XG4gIHJvdy5hcHBlbmRDaGlsZChjb2wxMyk7XG4gIHJvdy5hcHBlbmRDaGlsZChjb2wxNCk7XG4gIHJvdy5hcHBlbmRDaGlsZChjb2wxNSk7XG4gIHJvdy5hcHBlbmRDaGlsZChjb2wxNik7XG4gIHJvdy5hcHBlbmRDaGlsZChjb2wxNyk7XG4gIHJvdy5hcHBlbmRDaGlsZChjb2wxOCk7XG4gIHJvdy5hcHBlbmRDaGlsZChjb2wxOSk7XG5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmFwcGVuZENoaWxkKHJvdyk7XG5cbiAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVudTsiLCJpbXBvcnQgY29udGFjdENhcmQgZnJvbSAnLi9jb250YWN0LWNhcmQuanMnO1xuXG5mdW5jdGlvbiBjb250YWN0KCl7XG4gIC8vY3JlYXRlIHJvdyBmb3IgY29udGFjdCBpbmZvXG4gIGNvbnN0IHJvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByb3cxLmNsYXNzTGlzdC5hZGQoXCJyb3dcIixcImp1c3RpZnktY2VudGVyXCIpO1xuICBjb25zdCBjb2wxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29sMS5jbGFzc0xpc3QuYWRkKFwiY29sLTEyXCIpO1xuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAuY2xhc3NMaXN0LmFkZChcInRleHQtanVzdGlmeVwiKTtcbiAgcC5pbm5lckhUTUwgPSBcIlRoZSBEaXJ0YmFnIERpbmVyIGhhcyBubyBwZXJtYW5lbnQgbG9jYXRpb24uIFwiICtcbiAgXCJZb3UgY2FuIGZpbmQgdXMgaW4gYW4gb2xkIHZhbiB3aXRoICdEaXJ0YmFnIERpbmVyJyBzcHJheSBwYWludGVkIG9uIHRoZSBzaWRlLiAgV2UgYXJlIHVzdWFsbHkgcGFya2VkIGluIFdhbG1hcnQgUGFya2luZyBsb3RzIG9yIG9mZiBvZiBmb3Jlc3Qgc2VydmljZSByb2Fkcy4gXCIgK1xuICBcIldlIHdvdWxkIHByb3ZpZGUgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdmFuIGJ1dCB0aGUgdHJ1dGggaXMgdGhlIHZhbnMgd2UgZHJpdmUgYXJlIHNvIG9sZCBhbmQgZGVjcmVwaXQgdGhhdCB0aGV5IGRvbid0IGxhc3QgbG9uZy4gXCIgK1xuICBcIldlIGhhdmUgbm8gY2VsbHBob25lcyBhbmQgZG9uJ3QgZXhpc3Qgb24gc29jaWFsIG1lZGlhLiBCZWxvdyBhcmUgdGhlIGZvdW5kaW5nIG1lbWJlcnMgd2hvIGxpdmUgZnVsbCB0aW1lIGluIHRoZSBEaXJ0YmFnIERpbmVyIHZhbi5cIjtcbiAgY29sMS5hcHBlbmRDaGlsZChwKTtcbiAgcm93MS5hcHBlbmRDaGlsZChjb2wxKTtcblxuICAvL2NyZWF0ZSByb3cgZm9yIHBlcnNvbiBjYXJkc1xuICBjb25zdCByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcm93Mi5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuXG4gIC8vY3JlYXRlIHBlcnNvbiAnY2FyZHMnXG4gIGNvbnN0IGNvbDIgPSBjb250YWN0Q2FyZChcIi4uL2Rpc3QvYXNzZXRzL2ltZy95b3VyLWJveS0xLkpQR1wiLCBcIllvdXIgQm95IEFsZXhcIik7XG4gIGNvbnN0IGNvbDMgPSBjb250YWN0Q2FyZChcIi4uL2Rpc3QvYXNzZXRzL2ltZy95b3VyLWJveS0yLkpQR1wiLCBcIllvdXIgQm95IEtpdFwiKTtcbiAgY29uc3QgY29sNCA9IGNvbnRhY3RDYXJkKFwiLi4vZGlzdC9hc3NldHMvaW1nL3lvdXItYm95LTMuSlBHXCIsIFwiWW91ciBCb3kgRXJpY1wiKTtcblxuICAvL3N0aWNrIGNvbHMgaW50byBwZXJzb24gY2FyZCByb3dcbiAgcm93Mi5hcHBlbmRDaGlsZChjb2wyKTtcbiAgcm93Mi5hcHBlbmRDaGlsZChjb2wzKTtcbiAgcm93Mi5hcHBlbmRDaGlsZChjb2w0KTtcblxuICAvL3N0aWNrIGJvdGggcm93cyBpbnRvIGRpdlxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuYXBwZW5kQ2hpbGQocm93MSk7XG4gIGRpdi5hcHBlbmRDaGlsZChyb3cyKTtcblxuICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0OyJdLCJuYW1lcyI6WyJzZXRUYWJBY3RpdmUiLCJ0YWJFbGVtZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJzZXRUYWJJbmFjdGl2ZSIsImltYWdlUm93IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW1hZ2VDb2wiLCJpbWciLCJzcmMiLCJhcHBlbmRDaGlsZCIsInRleHRSb3ciLCJ0ZXh0Q29sIiwidGV4dFAiLCJpbm5lckhUTUwiLCJkaXYiLCJpbWFnZVBhdGgiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY29sIiwiaW1nRGl2IiwicFRpdGxlIiwicERlc2NyaXB0aW9uIiwibmFtZSIsInAiLCJjb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwicm93IiwiYWJvdXRCdXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJtZW51QnV0dG9uIiwiY29udGFjdEJ1dHRvbiIsInRhYnMiLCJwYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImNvbDEiLCJjb2wyIiwiY29sMyIsImNvbDQiLCJjb2w1IiwiY29sNiIsImNvbDciLCJjb2w4IiwiY29sMTAiLCJjb2wxMSIsImNvbDEyIiwiY29sMTMiLCJjb2wxNCIsImNvbDE1IiwiY29sMTYiLCJjb2wxNyIsImNvbDE4IiwiY29sMTkiLCJyb3cxIiwicm93MiJdLCJzb3VyY2VSb290IjoiIn0=